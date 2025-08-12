import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Star, Truck, Shield, Award, ChevronRight, Heart } from 'lucide-react';

const HomePageContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // Sample spice products - replace with actual API call
  const sampleSpices = [
    {
      id: 1,
      name: "Ceylon Cinnamon",
      price: 12.99,
      originalPrice: 15.99,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Organic Turmeric",
      price: 8.99,
      originalPrice: 10.99,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 89,
      badge: "Organic"
    },
    {
      id: 3,
      name: "Kashmiri Red Chili",
      price: 14.99,
      originalPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 156,
      badge: "Premium"
    },
    {
      id: 4,
      name: "Black Peppercorns",
      price: 9.99,
      originalPrice: 12.99,
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 203,
      badge: "Fresh"
    }
  ];

  const categories = [
    { name: "Whole Spices", icon: "🌶️", count: 45 },
    { name: "Ground Spices", icon: "🧂", count: 38 },
    { name: "Spice Blends", icon: "🥄", count: 22 },
    { name: "Organic", icon: "🌿", count: 31 },
    { name: "Exotic", icon: "✨", count: 18 },
    { name: "Herbs", icon: "🌱", count: 26 }
  ];

  useEffect(() => {
    // Simulate API call
    setFeaturedProducts(sampleSpices);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Spice Up Your
                  <span className="block text-yellow-300">Kitchen</span>
                </h1>
                <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed">
                  Discover premium spices from around the world. Fresh, authentic, and delivered to your doorstep.
                </p>
              </div>
              
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for spices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:ring-4 focus:ring-yellow-300 focus:outline-none shadow-lg"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all shadow-lg">
                  Shop Now
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all">
                  View Catalog
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-red-500 p-8 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-8xl">
                  🌶️
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $50</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% authentic and fresh spices</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Sourced directly from farms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Explore our wide range of premium spices</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-xl text-gray-600">Hand-picked premium spices for you</p>
            </div>
            <button className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              View All <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all group overflow-hidden"
              >
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-6xl">
                    🧂
                  </div>
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-orange-100">
              Get the latest updates on new spices, recipes, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              />
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;