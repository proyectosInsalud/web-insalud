"use client";

// components/Pagination.tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  totalItems: number;
  sizePage: number;
  currentPage: number;
};

export const PaginationPage = ({
  totalItems,
  sizePage,
  currentPage,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / sizePage);

  // Función para navegar a una página
  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete("page"); // Remover el parámetro si es página 1
    } else {
      params.set("page", page.toString());
    }

    const newUrl = params.toString() ? `?${params.toString()}` : "";
    router.push(`/blog${newUrl}`, { scroll: false }); // scroll: false evita el scroll automático
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots.filter(
      (item, index, array) => array.indexOf(item) === index
    );
  };

  const visiblePages =
    totalPages <= 7
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : getVisiblePages();

  // Si solo hay una página, no mostrar paginación
  if (totalPages <= 1) return null;

  return (
    <div className="py-12">
    <Pagination className="text-in">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious 
              onClick={(e) => {
                e.preventDefault();
                navigateToPage(currentPage - 1);
              }}
              className="cursor-pointer"
            />
          </PaginationItem>
        )}
        
        {visiblePages.map((page, index) => (
          <PaginationItem key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-gray-500">...</span>
            ) : (
              <PaginationLink 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPage(page as number);
                }}
                isActive={currentPage === page}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext 
              onClick={(e) => {
                e.preventDefault();
                navigateToPage(currentPage + 1);
              }}
              className="cursor-pointer"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  </div>
  );
};
