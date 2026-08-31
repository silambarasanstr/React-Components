import { Upload, X, FileText } from "lucide-react";

const FileUpload = ({
  label,
  name,
  value = null,
  onChange,
  accept,
  multiple = false,
  required = false,
  disabled = false,
  error,
  description = "PNG, JPG, PDF up to 5MB",
}) => {
  const files = multiple ? Array.from(value || []) : value ? [value] : [];

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);

    if (multiple) {
      onChange(selectedFiles);
    } else {
      onChange(selectedFiles[0] || null);
    }

    e.target.value = "";
  };

  const handleRemove = (index) => {
    if (multiple) {
      const updatedFiles = files.filter((_, i) => i !== index);
      onChange(updatedFiles);
    } else {
      onChange(null);
    }
  };

  return (
    <div className="w-full mb-3">
      {label && (
        <label className="mb-1 block text-xs font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <label
        htmlFor={name}
        className={`flex min-h-32 w-full flex-col items-center justify-center
          rounded-lg border-2 border-dashed px-4 py-6 text-center
          transition-all duration-200
          ${
            disabled
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "cursor-pointer border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50/30"
          }
          ${error ? "border-red-400" : ""}
        `}
      >
        <Upload size={22} className="mb-2 text-gray-400" />

        <p className="text-sm font-medium text-gray-700">Click to upload</p>

        <p className="mt-1 text-xs text-gray-400">{description}</p>

        <input
          id={name}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          className="hidden"
        />
      </label>

      {files.length > 0 && (
        <div className="mt-2 space-y-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
            >
              <div className="flex min-w-0 items-center gap-2">
                <FileText size={18} className="shrink-0 text-blue-500" />

                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-gray-700">
                    {file.name}
                  </p>

                  <p className="text-[11px] text-gray-400">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(index)}
                disabled={disabled}
                className="ml-2 rounded-md p-1 text-gray-400 transition hover:bg-red-50 hover:text-red-500 disabled:cursor-not-allowed"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
