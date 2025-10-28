import { zPost, zPostList, zLatestPosts, zLatestPostItem } from "@/schema/blog";
import { z } from "zod";

// Tipos para el blog
export type PostType = z.infer<typeof zPost>;
export type PostListType = z.infer<typeof zPostList>;
export type LatestPostsType = z.infer<typeof zLatestPosts>;
export type LatestPostItemType = z.infer<typeof zLatestPostItem>;