
import { Edit, Trash2 } from "lucide-react";

const DataTable = ({
  columns = [],
  data = [],
  loading = false,
  emptyMessage = "No data found.",
  onEdit,
  onDelete,
  actions = true,
  rowKey = "_id",
  onRowClick,
}) => {
  const colSpan = columns.length + (actions ? 2 : 1);

  return (
    <div className="w-full overflow-hidden bg-white border  border-gray-300 shadow-sm rounded-xl">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max text-sm text-left">
          {/* ================= HEADER ================= */}
          <thead className="bg-gray-100 border-b">
            <tr >
              <th className="w-14 px-4 py-3.5 text-xs font-bold tracking-wide text-center text-gray-700 uppercase">
                #
              </th>

              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`
                    px-4 py-3.5
                    text-xs font-bold
                    tracking-wide
                    text-gray-700
                    uppercase
                    whitespace-nowrap
                    ${column.className || ""}
                    ${
                      column.align === "center"
                        ? "text-center"
                        : column.align === "right"
                        ? "text-right"
                        : "text-left"
                    }
                  `}
                >
                  {column.label}
                </th>
              ))}

              {actions && (
                <th className="w-28 px-4 py-3.5 text-xs font-bold tracking-wide text-center text-gray-700 uppercase">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          {/* ================= BODY ================= */}
          <tbody>
            {/* Loading */}
            {loading && (
              <tr>
                <td colSpan={colSpan} className="px-4 py-14 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-7 h-7 border-2 border-gray-300 rounded-full border-t-gray-700 animate-spin" />

                    <span className="text-sm font-medium text-gray-500">
                      Loading data...
                    </span>
                  </div>
                </td>
              </tr>
            )}

            {/* Empty */}
            {!loading && data.length === 0 && (
              <tr>
                <td
                  colSpan={colSpan}
                  className="px-4 py-14 text-center text-gray-500"
                >
                  <p className="font-medium">{emptyMessage}</p>
                </td>
              </tr>
            )}

            {/* Rows */}
            {!loading &&
              data.map((row, index) => (
                <tr
                  key={row[rowKey] || index}
                  onClick={() => onRowClick?.(row)}
                  className={`
                    group
                    border-b border-gray-200
                    last:border-b-0
                    transition-colors duration-150
                    hover:bg-gray-100
                    ${onRowClick ? "cursor-pointer" : ""}
                  `}
                >
                  {/* Serial Number */}
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center justify-center w-7 h-7 text-xs font-semibold text-gray-700 bg-gray-200 border border-gray-300 rounded-md">
                      {index + 1}
                    </span>
                  </td>

                  {/* Columns */}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`
                        px-4 py-3.5
                        font-medium
                        text-gray-800
                        whitespace-nowrap
                        ${column.className || ""}
                        ${
                          column.align === "center"
                            ? "text-center"
                            : column.align === "right"
                            ? "text-right"
                            : "text-left"
                        }
                      `}
                    >
                      {column.render
                        ? column.render(row, index)
                        : row[column.key] ?? "-"}
                    </td>
                  ))}

                  {/* Actions */}
                  {actions && (
                    <td className="px-4 py-3.5">
                      <div className="flex items-center justify-center gap-2">
                        {onEdit && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEdit(row);
                            }}
                            className="
                              flex items-center justify-center
                              w-8 h-8
                              text-blue-600
                              bg-blue-50
                              border border-blue-100
                              rounded-lg
                              transition-all
                              hover:bg-blue-100
                              hover:border-blue-200
                              active:scale-95
                            "
                            title="Edit"
                          >
                            <Edit size={15} strokeWidth={2} />
                          </button>
                        )}

                        {onDelete && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDelete(row);
                            }}
                            className="
                              flex items-center justify-center
                              w-8 h-8
                              text-red-600
                              bg-red-50
                              border border-red-100
                              rounded-lg
                              transition-all
                              hover:bg-red-100
                              hover:border-red-200
                              active:scale-95
                            "
                            title="Delete"
                          >
                            <Trash2 size={15} strokeWidth={2} />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;

