import { zPost, zPostList } from "@/schema/blog";
import { z } from "zod";

// Tipos para el blog
export type PostType = z.infer<typeof zPost>;
export type PostListType = z.infer<typeof zPostList>;