import ProductGrid from "../components/ecommerce/product/ProductGrid";
import PromoBanner from "../components/ecommerce/home/PromoBanner";
import HeroSection from "../components/ecommerce/home/HeroSection";
import CategorySection from "../components/ecommerce/category/CategorySection";

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
    featured: true,
  },
];

const categories = [
  {
    id: 1,
    name: "Electronics",
    productCount: 24,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
  },
  {
    id: 2,
    name: "Fashion",
    productCount: 36,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
  },
  {
    id: 3,
    name: "Shoes",
    productCount: 18,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    name: "Watches",
    productCount: 12,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
  },
  {
    id: 5,
    name: "Beauty",
    productCount: 20,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
  },
  {
    id: 6,
    name: "Accessories",
    productCount: 15,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
];

const Home = () => {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <main className="w-full px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
      {/* Hero */}
      <HeroSection
        badge="SUMMER SALE"
        title="Discover Your New Favorites"
        description="Shop the latest collection with amazing deals on selected products."
        buttonText="Explore Products"
        onClick={() => console.log("Explore clicked")}
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
      />

      {/* Featured Products */}

      <div className="py-8">
        <ProductGrid
          title="Featured Products"
          description="Discover our most popular products"
          products={featuredProducts}
          showDescription={false}
          columns={5}
        />
      </div>

      {/* Promotional Banner */}
      <PromoBanner
        title="Summer Sale"
        description="Enjoy up to 50% off on electronics and accessories."
        buttonText="Shop Now"
        onClick={() => console.log("Shop clicked")}
      />

      {/* Categories */}
      <CategorySection
        title="Shop by Category"
        description="Explore our popular categories"
        categories={categories}
        onCategoryClick={(category) => console.log("Category:", category.name)}
      />
    </main>
  );
};

export default Home;
