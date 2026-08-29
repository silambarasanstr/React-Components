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
}) => {
  return (
    <div className="w-full overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left min-w-max">
          {/* Header */}
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">
                #
              </th>

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap"
                >
                  {column.label}
                </th>
              ))}

              {actions && (
                <th className="px-4 py-3 font-semibold text-center text-gray-700 whitespace-nowrap">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-100">
            {/* Loading */}
            {loading && (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 2 : 1)}
                  className="px-4 py-10 text-center text-gray-500"
                >
                  Loading...
                </td>
              </tr>
            )}

            {/* Empty */}
            {!loading && data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 2 : 1)}
                  className="px-4 py-10 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}

            {/* Rows */}
            {!loading &&
              data.map((row, index) => (
                <tr
                  key={row[rowKey] || index}
                  className="transition hover:bg-gray-50"
                >
                  {/* Serial Number */}
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                    {index + 1}
                  </td>

                  {/* Columns */}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-4 py-3 text-gray-700 whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(row, index)
                        : row[column.key] ?? "-"}
                    </td>
                  ))}

                  {/* Actions */}
                  {actions && (
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        {onEdit && (
                          <button
                            type="button"
                            onClick={() => onEdit(row)}
                            className="p-2 text-blue-600 transition rounded-md hover:bg-blue-50"
                            title="Edit"
                          >
                            <Edit size={16} />
                          </button>
                        )}

                        {onDelete && (
                          <button
                            type="button"
                            onClick={() => onDelete(row)}
                            className="p-2 text-red-600 transition rounded-md hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 size={16} />
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