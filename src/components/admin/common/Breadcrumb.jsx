import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const paths = location.pathname
    .split("/")
    .filter(Boolean);

  const formatLabel = (text) => {
    return decodeURIComponent(text)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav className="flex items-center text-sm" aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center gap-1.5 text-gray-500 transition hover:text-gray-900"
      >
        <Home size={16} />
        <span>Home</span>
      </Link>

      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;
        const pathUrl = "/" + paths.slice(0, index + 1).join("/");

        return (
          <div key={pathUrl} className="flex items-center">
            <ChevronRight
              size={16}
              className="mx-2 text-gray-400"
            />

            {isLast ? (
              <span className="font-medium text-gray-900">
                {formatLabel(path)}
              </span>
            ) : (
              <Link
                to={pathUrl}
                className="text-gray-500 transition hover:text-gray-900"
              >
                {formatLabel(path)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;