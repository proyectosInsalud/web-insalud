export type Convenio = {
  src: string;
  name: string;
  /** Texto de descuento tal como figura en "Convenios Firmados.xlsx". Ausente = no está en esa lista todavía. */
  discount?: string;
};

export const CONVENIOS: Convenio[] = [
  { src: "/images/convenios/banco_falabella.svg", name: "Banco Falabella", discount: "20% EN CONSULTAS, 15% EN PROCEDIMIENTOS" },
  { src: "/images/convenios/banco_ripley.svg", name: "Banco Ripley", discount: "20% EN CONSULTAS, 15% EN PROCEDIMIENTOS" },
  // "Bonda" es la app de beneficios corporativos bajo la que firmó el Colegio Médico del Perú (mismo descuento aplica a todo ese grupo de empresas afiliadas).
  { src: "/images/convenios/bondu.svg", name: "Bonda", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
  { src: "/images/convenios/colegio_abogado.svg", name: "Colegio de Abogados de Lima", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
  { src: "/images/convenios/colegio_administracion.svg", name: "Colegio Regional de Licenciados en Administración de Lima", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
  // No aparece en "Convenios Firmados.xlsx" — % pendiente de confirmar, se muestra genérico sin cifra.
  { src: "/images/convenios/colegio_odontologo.svg", name: "Colegio Odontológico", discount: "TARIFA PREFERENCIAL" },
  // No aparece en "Convenios Firmados.xlsx" — % pendiente de confirmar, se muestra genérico sin cifra.
  { src: "/images/convenios/inb2b.svg", name: "InB2B", discount: "TARIFA PREFERENCIAL" },
  { src: "/images/convenios/inlearning.svg", name: "InLearning", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
  { src: "/images/convenios/la_u.svg", name: "Club Universitario de Deportes", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
  { src: "/images/convenios/lda.svg", name: "Liga Deportiva Alajuelense", discount: "15% EN CONSULTA MÉDICA, PAQUETE DE ONDAS Y PLASMA PAQUETE" },
  { src: "/images/convenios/miraflores.svg", name: "Municipalidad de Miraflores", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
  { src: "/images/convenios/muni_san_borja.svg", name: "Municipalidad de San Borja", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
  { src: "/images/convenios/pacifico.svg", name: "Pacífico Seguros", discount: "20% EN CONSULTAS, 15% EN PROCEDIMIENTOS" },
  // UPEE App agrupa varios convenios de Costa Rica (LDA, colegios, asociaciones solidaristas), todos con el mismo descuento.
  { src: "/images/convenios/upee.svg", name: "UPEE", discount: "15% EN CONSULTA MÉDICA, PAQUETE DE ONDAS Y PLASMA PAQUETE" },
  // "Zegel" está agrupado junto a InLearning/IDAT en la hoja de convenios, mismo descuento.
  { src: "/images/convenios/zegel.svg", name: "Zegel", discount: "15% EN UROLOGÍA, 15% EN GINECOLOGÍA, 10% EN ESTÉTICA" },
];
