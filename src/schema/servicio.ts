import { z } from "zod";

/** Helpers */
const SlugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug inválido (usa kebab-case)");
const PathOrUrlSchema = z
  .string()
  .refine(
    (v) => v.startsWith("/") || /^https?:\/\//i.test(v),
    "debe ser ruta interna (/...) o URL absoluta"
  );

const ImageSchema = z.object({
  src: PathOrUrlSchema,
  alt: z.string().min(1),
});

const CTASchema = z.object({
  text: z.string().min(1),
  href: PathOrUrlSchema,
});

/** Secciones */
const HeroSchema = z.object({
  badge: z.string().min(1),
  progressPct: z.number().int().min(0).max(100),
  heading: z.string().min(1),
  subheading: z.string().min(1),
  cta: CTASchema,
  image: ImageSchema,
});

const ProcesoSchema = z.object({
  title: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),
  duration: z.string().min(1),
});

const ImpactoSchema = z.object({
  lead: z.string().min(1),
  suffix: z.string().min(1),
  leadContinue: z.string().min(1),
  description: z.string().min(1),
});

const BenefitItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: ImageSchema,
});

const BeneficiosDetalleSchema = z.object({
  title: z.string().min(1),
  titleHighlight: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(1),
});

const RespaldoMedicoSchema = z.object({
  title: z.string().min(1),
  titleHighlight: z.string().min(1),
  note: z.string().min(1),
  cta: CTASchema,
  image: ImageSchema,
});

export const TestimonialSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  description: z.string().min(1),
  // En tu JSON "image" es un string; si en algún caso usas objeto, admite ambos:
  image: z.union([PathOrUrlSchema, ImageSchema]),
  meta: z.string().min(1),
});

const FAQSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const FAQSectionSchema = z.object({
  image: PathOrUrlSchema,
  alt: z.string().min(1),
  faqs: z.array(FAQSchema).min(1),
});

const EquipoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: ImageSchema,
  badges: z.array(z.string().min(1)).min(1),
});

const CTAFinalSchema = z.object({
  text: z.string().min(1),
  subtext: z.string().min(1),
  button: CTASchema,
});

const HighlightSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

const SEOSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  canonical: z.string(),
  ogImage: PathOrUrlSchema,
});

/** Schema principal */
export const DiagnosticoSchema = z.object({
  title: z.string().min(1),
  slug: SlugSchema,
  summary: z.string().min(1),

  hero: HeroSchema,
  proceso: ProcesoSchema,
  impacto: ImpactoSchema,

  benefitsGrid: z.array(BenefitItemSchema).min(1),

  beneficiosDetalle: BeneficiosDetalleSchema,
  respaldoMedico: RespaldoMedicoSchema,

  testimonials: z.array(TestimonialSchema).min(1),
  faq: FAQSectionSchema,

  equipo: EquipoSchema,
  ctaFinal: CTAFinalSchema,

  media: z.array(ImageSchema).default([]),
  highlights: z.array(HighlightSchema).default([]),

  seo: SEOSchema,
});

