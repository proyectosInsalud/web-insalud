"use client";

import { useCallback, useState } from "react";
import { BlogSearch } from "./BlogSearch";
import { GridBlog } from "./GridBlog";
import { PaginationPage } from "./PaginationPage";
import { PostListType } from "@/types";

const PAGE_SIZE = 8;

type BlogWithSearchProps = {
  currentPage: number;
  data: PostListType;
};

export const BlogWithSearch = ({ currentPage, data }: BlogWithSearchProps) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = useCallback((searching: boolean) => {
    setIsSearching(searching);
  }, []);

  return (
    <>
      <BlogSearch onSearchChange={handleSearchChange} />

      {!isSearching && (
        <>
          <GridBlog data={data} />
          <PaginationPage
            totalItems={data.total}
            sizePage={PAGE_SIZE}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};
