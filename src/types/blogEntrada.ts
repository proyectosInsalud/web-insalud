import { zPostEntrada } from "@/schema/blogEntrada";
import { PortableTextBlock } from "next-sanity";
import { z } from "zod";

// Tipos para el blogEntrada
export type PostBaseType = z.infer<typeof zPostEntrada>;
export type PostTypeEntry = PostBaseType & {
    body: PortableTextBlock[];
};