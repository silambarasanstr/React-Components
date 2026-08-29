import React, { useState } from "react";

const ProductGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(
    images[0] || "https://placehold.co/600x600?text=No+Image"
  );

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* Thumbnails */}
      <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-lg border-2 transition ${
              selectedImage === image
                ? "border-blue-600"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white lg:order-2">
        <div className="group relative aspect-square cursor-zoom-in overflow-hidden">
          <img
            src={selectedImage}
            alt="Product"
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;