"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Laptop, ShoppingCart, Star, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import supabase from "../../config/supabase";

interface Product {
  id: number;
  title: string;
  tag: string;
  description: string;
  rating: number;
  review: string;
  price: number;
}
const Products = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select();
      if (error) console.error(error);
      else setProductList(data as Product[]);
    };
    fetchProducts();
  }, []);
  
  console.log(productList.length > 0 ? productList : "No products found");

  console.log(productList, "data")
  const filteredProducts = productList.filter((product) => {
    const productName = product.title?.toLowerCase() || "";
    const productTag = product.tag?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();
    const filter = filterTerm.toLowerCase();
    return (
      (filter === "" || productTag === filter) &&
      (search === "" || productName.includes(search))
    );
  });

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <div className="container mx-auto px-6">
        <div className="pt-24 pb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              All Products
            </h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Discover our most popular leather goods, loved by customers
              worldwide for their exceptional quality and timeless design.
            </p>
          </div>
          <div className="flex justify-between mb-4 gap-5">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 w-full py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
            />
            <select
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
              className="px- py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
            >
              <option value="">All</option>
              <option value="bestseller">Bestseller</option>
              <option value="new">New</option>
              <option value="limited">Limited</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-stone-50"
            >
              <div className="relative overflow-hidden ">
                <img
                  src="../../../public/globe.svg"
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <Badge className="absolute top-4 left-4 bg-amber-900 text-white hover:bg-amber-800">
                  {product.tag}
                </Badge>

                <Button
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-amber-900 hover:bg-amber-50 shadow-lg"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-950 mb-2">
                  {product.title}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center text-yellow-500 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-amber-900 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-amber-700">
                    ({product.review} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-950">
                      {product.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {product.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
