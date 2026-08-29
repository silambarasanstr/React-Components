import ProductGallery from "../components/ecommerce/product/ProductGallery";
import ProductInfo from "../components/ecommerce/product/ProductInfo";

const images = [
  "https://picsum.photos/id/10/700/700",
  "https://picsum.photos/id/20/700/700",
  "https://picsum.photos/id/30/700/700",
  "https://picsum.photos/id/40/700/700",
];

const ProductDetails = () => {
  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery images={images} />
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
