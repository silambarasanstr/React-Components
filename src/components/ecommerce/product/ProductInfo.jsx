import { useState } from "react";
import {
  Star,
  CheckCircle,
  Truck,
  RotateCcw,
  ShieldCheck,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm">
      {/* Product Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Apple AirPods Pro (2nd Generation)
        </h1>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <span className="font-medium text-gray-700">4.8</span>

          <span className="text-gray-500">(1,254 Reviews)</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2 border-y py-5 text-sm">
        <div className="flex">
          <span className="w-24 font-semibold">Brand</span>
          <span className="text-gray-600">Apple</span>
        </div>

        <div className="flex">
          <span className="w-24 font-semibold">Category</span>
          <span className="text-gray-600">Electronics</span>
        </div>

        <div className="flex">
          <span className="w-24 font-semibold">SKU</span>
          <span className="text-gray-600">APP-001</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-3xl font-bold text-blue-600">₹19,999</h2>

        <span className="text-lg text-gray-400 line-through">₹24,999</span>

        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
          20% OFF
        </span>
      </div>

      {/* Stock */}
      <div className="flex items-center gap-2 text-green-600">
        <CheckCircle size={18} />
        <span className="font-medium">In Stock</span>
      </div>

      {/* Description */}
      <div className="border-t pt-6">
        <h3 className="mb-2 text-lg font-semibold">Description</h3>

        <p className="leading-7 text-gray-600">
          The AirPods Pro feature Active Noise Cancellation, Transparency Mode,
          Adaptive Audio, Personalized Spatial Audio and USB-C charging for an
          incredible listening experience.
        </p>
      </div>

      {/* Quantity */}
      <div className="border-t pt-6">
        <h3 className="mb-3 text-lg font-semibold">Quantity</h3>

        <div className="flex w-fit items-center overflow-hidden rounded-lg border">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="p-3 hover:bg-gray-100"
          >
            <Minus size={18} />
          </button>

          <span className="w-16 text-center font-semibold">{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid gap-3 border-t pt-6 sm:grid-cols-3">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <button className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
          Buy Now
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:bg-gray-100">
          <Heart size={18} />
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
