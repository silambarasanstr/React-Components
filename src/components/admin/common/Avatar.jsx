const Avatar = ({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  className = "",
}) => {
  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
  };

  const getInitials = (name) => {
    if (!name) return "?";

    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className={`
        ${sizes[size] || sizes.md}
        shrink-0
        overflow-hidden
        rounded-full
        bg-gray-200
        text-gray-600
        font-semibold
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;