import { serverClient } from "@/lib/sanity.client";
import { POSTS_SEARCH } from "@/lib/queries";
import { NextRequest, NextResponse } from "next/server";

// Elimina caracteres especiales de GROQ para evitar inyección
function sanitize(input: string) {
  return input.replace(/[*?\\^~"']/g, "").trim();
}

export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("q") ?? "";
  const q = sanitize(raw);

  if (q.length < 2) {
    return NextResponse.json([]);
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results = await (serverClient as any).fetch(POSTS_SEARCH, {
      query: `${q}*`,
    });
    const res = NextResponse.json(results ?? []);
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
