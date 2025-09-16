export const POSTS_PAGINATED = /* groq */ `
{
  "items": *[
    _type == "post" &&
    (!draft && defined(publishedAt) && publishedAt <= now())
  ]
  | order(publishedAt desc)[$start...$end]{
    _id,
    excerpt,
    title,
    "slug": slug.current,
    publishedAt,
    "cover": { "url": cover.asset->url, "alt": cover.alt },
    category->{ _id, title, "slug": slug.current },
    diagnostico->{ _id, title, "slug": slug.current, icon },
    "tagsExpanded": tags[]->{ _id, title, "slug": slug.current },
    author->{ _id, name, "slug": slug.current, "image": { "url": image.asset->url } },
  },
  "total": count(*[
    _type == "post" &&
    (!draft && defined(publishedAt) && publishedAt <= now())
  ])
}
`;

export const POST_BY_SLUG = /* groq */ `
  *[
  _type == "post" &&
  slug.current == $slug
]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,

  "cover": { "url": cover.asset->url, "alt": cover.alt },

  category->{ _id, title },
  diagnostico->{ _id, title },
  "tags": tags[]->{ _id, title },

  author->{
    _id,
    name,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    }
  },

  "seo": {
    "metaTitle": coalesce(seo.metaTitle, title),
    "metaDescription": coalesce(seo.metaDescription, pt::text(body)[0...160])
  },

  body[]{
    ...,
    _type == "image" => {
      _type, "assetRef": asset->_ref, alt, caption, "lqip": asset->metadata.lqip
    },
    _type == "code" => { _type, code, language },
    _type == "divider" => { _type },
    _type == "youtube" => { _type, url, videoId },
    _type == "callout" => { _type, title, body }
  }
}
`;
