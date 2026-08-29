import { Upload, X, FileText } from "lucide-react";

const FileUpload = ({
  label,
  name,
  value,
  onChange,
  accept,
  required = false,
  disabled = false,
  error,
  helperText,
}) => {
  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      onChange(file);
    }
  };

  const handleRemove = () => {
    onChange(null);
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      {!value ? (
        <label
          htmlFor={name}
          className={`flex min-h-32 w-full cursor-pointer flex-col
            items-center justify-center rounded-lg border-2 border-dashed
            px-4 py-6 text-center transition
            ${
              error
                ? "border-red-400 bg-red-50"
                : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50"
            }
            ${disabled ? "cursor-not-allowed opacity-50" : ""}
          `}
        >
          <Upload className="w-6 h-6 mb-2 text-gray-400" />

          <p className="text-sm font-medium text-gray-700">
            Click to upload
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {helperText || "Choose a file from your device"}
          </p>

          <input
            id={name}
            name={name}
            type="file"
            accept={accept}
            onChange={handleChange}
            disabled={disabled}
            className="hidden"
          />
        </label>
      ) : (
        <div className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center min-w-0 gap-3">
            <FileText className="w-5 h-5 text-blue-500 shrink-0" />

            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">
                {value.name}
              </p>

              <p className="text-xs text-gray-500">
                {(value.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            disabled={disabled}
            className="rounded-md p-1.5 text-gray-400 transition hover:bg-gray-200 hover:text-red-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default FileUpload;