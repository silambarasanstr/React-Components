const formatDate = (date, options = {}) => {
  if (!date) return "";

  const defaultOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-IN", {
    ...defaultOptions,
    ...options,
  }).format(new Date(date));
};

export default formatDate;
