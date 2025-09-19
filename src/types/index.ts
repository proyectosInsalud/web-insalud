
import { formPreReservationSchema, formReservationSchema } from "@/schema";
import { zPost, zPostList } from "@/schema/blog";
import { zPostEntrada } from "@/schema/blogEntrada";
import { libroSchema } from "@/schema/libro";
import { DiagnosticoSchema, SEOSchema, TestimonialSchema } from "@/schema/servicio";
import { PortableTextBlock } from "next-sanity";
import { z } from "zod";

// Tipo para la reserva de citas
export type FormReservationType = z.infer<typeof formReservationSchema>

// Tipo para la pre-reserva de citas
export type FormPreReservationType = z.infer<typeof formPreReservationSchema>;

// Tipos para la product page de diagnosticos
export type TypeDiagnostico = z.infer<typeof DiagnosticoSchema>;

// Tipo para los testimoniales del product page de diagnosticos
export type TestimonialSchemaType = z.infer<typeof TestimonialSchema>;

// Tipo para los servicios (Seo individual))
export type SeoServicioType = z.infer<typeof SEOSchema>;

// Tipos para el blog
export type PostType = z.infer<typeof zPost>;
export type PostListType = z.infer<typeof zPostList>;

// Tipos para el blogEntrada
export type PostBaseType = z.infer<typeof zPostEntrada>;
export type PostTypeEntry = PostBaseType & {
    body: PortableTextBlock[];
};

// Tipos para el libro de reclamaciones
export type LibroReclamacionesType = z.infer<typeof libroSchema>;