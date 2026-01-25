"use client";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  visiblePages?: number;
};

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  visiblePages = 5,
}: PaginationProps) {
  let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);

  let endPage = startPage + visiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      {/* Prev */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      {/* Numbers */}
      {startPage > 1 && <span className="px-2">...</span>}

      {Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
        const page = startPage + i;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded transition ${
              currentPage === page
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        );
      })}

      {endPage < totalPages && <span className="px-2">...</span>}

      {/* Next */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
