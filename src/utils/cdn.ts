/**
 * Función para construir URLs de CDN para imágenes
 * @param ruta - La ruta de la imagen (ej: "/mi-imagen.jpg")
 * @returns URL completa del CDN
 */
export const cdn = (ruta: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_CDN_URL || '';
  
  // Asegurar que la ruta comience con "/"
  const rutaNormalizada = ruta.startsWith('/') ? ruta : `/${ruta}`;
  
  return `${baseUrl}${rutaNormalizada}`;
};
