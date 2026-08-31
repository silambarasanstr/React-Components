import ProductGrid from "../components/ecommerce/product/ProductGrid";
import FilterSidebar from "../components/ecommerce/filter/FilterSidebar";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    image: "https://picsum.photos/300/300?random=1",
    description: "Premium wireless headphones.",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 125,
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    image: "https://picsum.photos/300/300?random=2",
    description: "Track your fitness and health.",
    price: 4999,
    originalPrice: 5999,
    rating: 4.6,
    reviews: 210,
    inStock: true,
    featured: false,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Electronics",
    image: "https://picsum.photos/300/300?random=3",
    description: "Portable Bluetooth speaker with great sound quality.",
    price: 1999,
    originalPrice: 2999,
    rating: 4.4,
    reviews: 85,
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    category: "Electronics",
    image: "https://picsum.photos/300/300?random=4",
    description: "High-precision gaming mouse for competitive play.",
    price: 1499,
    originalPrice: 1999,
    rating: 4.7,
    reviews: 150,
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    name: "Fitness Tracker",
    category: "Electronics",
    image: "https://picsum.photos/300/300?random=5",
    description: "Monitor your daily activity and heart rate.",
    price: 2499,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 95,
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: "Tablet",
    category: "Electronics",
    image: "https://picsum.photos/300/300?random=6",
    description: "Versatile tablet for work and entertainment.",
    price: 1999,
    originalPrice: 2499,
    rating: 4.3,
    reviews: 75,
    inStock: true,
    featured: false,
  },
];

function ProductsPage() {
  return (
    <div className="container px-3 py-4 mx-auto">
      <div className="flex items-start gap-4">
        {/* Sidebar */}
        <aside className="w-64 overflow-hidden bg-white border border-gray-200 rounded shrink-0">
          <FilterSidebar />
        </aside>

        {/* Products */}
      
          <ProductGrid
            products={products}
            onAddToCart={(product) => console.log("Cart:", product)}
            onWishlist={(product) => console.log("Wishlist:", product)}
            onView={(product) => console.log("View:", product)}
            columns={4}
          />
       
      </div>
    </div>
  );
}

export default ProductsPage;
