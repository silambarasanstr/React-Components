const PromoBanner = ({
  title = "Big Sale is Live!",
  description = "Get up to 50% off on selected products.",
  buttonText = "Shop Now",
  onClick,
}) => {
  return (
    <section className="w-full px-6 py-8 my-5 text-white rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 sm:px-10">
      <div className="max-w-2xl">
        <span className="inline-block mb-2 text-xs font-semibold tracking-widest text-gray-300">
          LIMITED TIME OFFER
        </span>

        <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
          {title}
        </h2>

        <p className="mb-5 text-sm text-gray-300 sm:text-base">
          {description}
        </p>

        <button
          onClick={onClick}
          className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default PromoBanner;