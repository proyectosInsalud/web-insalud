
import { formPreReservationSchema, formReservationSchema } from "@/schema";
import { blogFrontmatterSchema, blogPostMetaSchema } from "@/schema/blog";
import { DiagnosticoSchema, SEOSchema, TestimonialSchema } from "@/schema/servicio";
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
export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
export type BlogPostMeta = z.infer<typeof blogPostMetaSchema>;