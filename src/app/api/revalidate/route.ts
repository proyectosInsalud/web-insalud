import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // Sanity envía el documento afectado en el body del webhook
  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = body?.slug?.current ?? body?._id;
  } catch {
    // Body vacío o inválido — igual revalidamos todo el blog
  }

  revalidatePath("/blog", "page");
  revalidatePath("/blog/[slug]", "page");

  // Revalida el post específico si Sanity envió el slug
  if (slug) {
    revalidatePath(`/blog/${slug}`, "page");
  }

  return NextResponse.json({ revalidated: true, slug: slug ?? null });
}
