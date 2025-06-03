import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Laptop, Wallet } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      icon: Briefcase,
      title: "Leather Bags",
      description: "Handcrafted bags that combine style with functionality. Perfect for the modern professional.",
      features: ["Premium Full-Grain Leather", "Handstitched Details", "Lifetime Warranty"],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop"
    },
    {
      icon: Laptop,
      title: "Laptop Bags",
      description: "Protect your technology in style with our premium leather laptop bags and cases.",
      features: ["Padded Protection", "Multiple Compartments", "Water Resistant"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    },
    {
      icon: Wallet,
      title: "Leather Wallets",
      description: "Slim, sophisticated wallets that age beautifully with time and use.",
      features: ["RFID Protection", "Minimalist Design", "Italian Leather"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Discover our range of premium leather goods, each piece meticulously crafted 
            with attention to detail and built to last a lifetime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 rounded-full p-3 group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
                  <product.icon className="h-6 w-6" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-amber-950 mb-3">{product.title}</h3>
                <p className="text-amber-800 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;