import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, totalPages, setPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-2 mt-6 select-none">
          {/* Prev Button */}
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`p-2 border  ${
              page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Page Numbers */}
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 flex items-center justify-center text-sm font-medium transition
            ${
              p === page
                ? "bg-black text-white border-black"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            >
              {p}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className={`p-2 border ${
              page === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
