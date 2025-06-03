import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Executive Briefcase",
      price: "$449",
      originalPrice: "$599",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      badge: "Bestseller"
    },
    {
      name: "Premium Laptop Sleeve",
      price: "$189",
      originalPrice: "$249",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      badge: "New"
    },
    {
      name: "Minimalist Wallet",
      price: "$129",
      originalPrice: "$169",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop",
      badge: "Limited"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Discover our most popular leather goods, loved by customers worldwide 
            for their exceptional quality and timeless design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <Badge className="absolute top-4 left-4 bg-amber-900 text-white hover:bg-amber-800">
                  {product.badge}
                </Badge>
                
                <Button 
                  size="sm" 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-amber-900 hover:bg-amber-50 shadow-lg"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-950 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center text-yellow-500 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-amber-900 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-amber-700">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-950">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/products" >
          <Button 
            size="lg" 
            className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;