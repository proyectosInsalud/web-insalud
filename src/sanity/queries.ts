import {defineQuery} from 'next-sanity';

// Base de filtros: publishedAt o _createdAt, búsqueda en title/body/SEO
const BASE_FILTER = `
  _type == "post" &&
  defined(slug.current) &&
  (
    !defined($q) ||
    title match $q ||
    pt::text(body) match $q ||
    seo.metaTitle match $q ||
    seo.metaDescription match $q
  ) &&
  (
    !defined($category) ||
    references(*[_type=="category" && slug.current==$category]._id)
  ) &&
  (
    !defined($diagnostico) ||
    references(*[_type=="diagnostico" && slug.current==$diagnostico]._id)
  )
`;

// Campos que necesita tu UI (autor, categoría, diagnóstico, cover, excerpt, fecha)
const POST_FIELDS = `
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  publishedAt,
  cover,
  "excerpt": coalesce(
    string::join(select(body[_type=="block"][0..2].children[].text)," "),
    ""
  ),
  "author": author->{ _id, name, "slug": slug.current, image },
  "category": category->{ _id, title, "slug": slug.current },
  "diagnostico": diagnostico->{ _id, title, "slug": slug.current, icon }
`;

export const POSTS_QUERY_DESC = defineQuery(`
  *[${BASE_FILTER}]
  | order(coalesce(publishedAt, _createdAt) desc)
  [$offset...$end]{
    ${POST_FIELDS}
  }
`);

export const POSTS_QUERY_ASC = defineQuery(`
  *[${BASE_FILTER}]
  | order(coalesce(publishedAt, _createdAt) asc)
  [$offset...$end]{
    ${POST_FIELDS}
  }
`);

export const POSTS_COUNT_QUERY = defineQuery(`
  count(*[${BASE_FILTER}])
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type=="post" && slug.current==$slug][0]{
    ${POST_FIELDS},
    body
  }
`);

export const CATEGORIES_QUERY = defineQuery(`
  *[_type=="category"]|order(title asc){ _id, title, "slug": slug.current }
`);

export const DIAGNOSTICOS_QUERY = defineQuery(`
  *[_type=="diagnostico"]|order(title asc){ _id, title, "slug": slug.current, icon }
`);
