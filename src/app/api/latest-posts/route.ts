import { serverClient } from "@/lib/sanity.client";
import { LATEST_POSTS } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await serverClient.fetch(LATEST_POSTS);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return NextResponse.json({ items: [] }, { status: 500 });
  }
}