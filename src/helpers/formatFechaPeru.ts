export function formatFechaPeru(f?: string | Date): string {
  if (!f) return "";
  const raw = typeof f === "string" ? f.trim() : f;

  let date: Date;
  if (typeof raw === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const [y, m, d] = raw.split("-").map(Number);
    date = new Date(Date.UTC(y, m - 1, d));
  } else if (raw instanceof Date) {
    date = raw;
  } else {
    date = new Date(raw);
  }
  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("es-PE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "America/Lima",
  }).format(date);
}

export function formatMesDiaAnio(iso: string, tz = 'America/Lima') {
  const d = new Date(iso);
  const f = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('es-PE', { timeZone: tz, ...opts }).format(d);

  const month = f({ month: 'long' });
  const day   = f({ day: 'numeric' });
  const year  = f({ year: 'numeric' });

  const capMonth = month.charAt(0).toUpperCase() + month.slice(1);
  return `${capMonth} ${day}, ${year}`;
}

export function formatDiaMesAnio(iso: string, tz = 'America/Lima') {
  const d = new Date(iso);
  const f = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('es-PE', { timeZone: tz, ...opts }).format(d);

  const weekday = f({ weekday: 'long' });
  const day = f({ day: 'numeric' });
  const month = f({ month: 'long' });
  const year = f({ year: 'numeric' });

  const capWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const capMonth = month.charAt(0).toUpperCase() + month.slice(1);
  return `${capWeekday}, ${day} de ${capMonth} de ${year}`;
}
