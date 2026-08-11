/**
 * Fuente única de verdad para las cifras institucionales de InSalud.
 *
 * Antes cada bloque tenía su propio número escrito a mano y la home llegó a
 * mostrar "+20 especialistas" en mobile y "+50" en desktop dentro del MISMO
 * componente. Si una cifra cambia, se cambia acá y en ningún otro lado.
 */
export const INSALUD_STATS = {
  procedimientos: 105000,
  tratamientosExitosos: 25000,
  especialistas: 50,
  sedes: 9,
} as const;

/** Formatea con separador de miles peruano: 105000 -> "105 000" */
const miles = (n: number) => n.toLocaleString("es-PE").replace(/[,.]/g, " ");

export const STATS_LABEL = {
  procedimientos: `+${miles(INSALUD_STATS.procedimientos)}`,
  tratamientosExitosos: `+${miles(INSALUD_STATS.tratamientosExitosos)}`,
  especialistas: `+${INSALUD_STATS.especialistas}`,
  sedes: `${INSALUD_STATS.sedes}`,
} as const;
