const HeroSection = ({
  badge = "NEW COLLECTION",
  title = "Upgrade Your Everyday Style",
  description = "Discover premium products designed to make your everyday life better.",
  buttonText = "Shop Now",
  onClick,
  image = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
}) => {
  return (
    <section className="overflow-hidden bg-gray-100 rounded-2xl">
      <div className="grid min-h-[420px] items-center md:grid-cols-2">
        {/* Content */}
        <div className="px-6 py-10 sm:px-10 md:px-12 lg:px-16">
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest text-gray-500">
            {badge}
          </span>

          <h1 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="max-w-lg mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            {description}
          </p>

          <button
            onClick={onClick}
            className="px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-gray-900 rounded-lg hover:bg-gray-700"
          >
            {buttonText}
          </button>
        </div>

        {/* Image */}
        <div className="h-full min-h-[280px]">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
