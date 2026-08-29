import { ChevronLeft, ChevronRight } from "lucide-react";

const TablePagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  totalItems = 0,
  itemsPerPage = 10,
}) => {
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col gap-3 px-4 py-3 bg-white border-t border-gray-200 sm:flex-row sm:items-center sm:justify-between">
      {/* Results Info */}
      <p className="text-sm text-gray-600">
        Showing <span className="font-medium text-gray-900">{startItem}</span>{" "}
        to <span className="font-medium text-gray-900">{endItem}</span> of{" "}
        <span className="font-medium text-gray-900">{totalItems}</span> results
      </p>

      {/* Pagination */}
      <div className="flex items-center gap-1">
        {/* Previous */}
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="inline-flex items-center justify-center text-gray-600 transition border border-gray-200 rounded-md h-9 w-9 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`h-9 min-w-9 rounded-md px-2 text-sm font-medium transition ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages === 0}
          className="inline-flex items-center justify-center text-gray-600 transition border border-gray-200 rounded-md h-9 w-9 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
