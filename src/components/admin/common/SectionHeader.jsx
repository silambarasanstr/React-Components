const SectionHeader = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800">
        {title}
      </h2>

      <p className="text-xs text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;