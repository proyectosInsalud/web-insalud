import z from "zod";

export const zPostEntrada = z.object({
    _id: z.string(),
    title: z.string(),
    slug: z.string(),
    publishedAt: z.string().optional(),
    cover: z.object({
        url: z.string().optional(),
        alt: z.string().optional(),
    }),
    author: z.object({
        _id: z.string(),
        name: z.string(),
        image: z.object({
            url: z.string().optional(),
            alt: z.string().optional(),
        }),
    }),
    tags: z.array(
        z.object({
            _id: z.string(),
            title: z.string(),
        })
    ).optional(),
    seo: z.object({
        metaDescription: z.string(),
        metaTitle: z.string(),
    }),
});

