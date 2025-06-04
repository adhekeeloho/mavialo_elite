import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-amber-950 mb-6 tracking-tight">
            MAVIALO
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-amber-800 mt-2">
              ELITE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-900 mb-8 max-w-2xl mx-auto leading-relaxed">
            Handcrafted leather goods that define elegance. From premium bags to sophisticated wallets, 
            experience the art of timeless craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
           <Link href="products">
            <Button 
              size="lg" 
              className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            <Link href="about_us">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Our Story
            </Button>
            </Link>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-3xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=500&fit=crop" 
                alt="Premium leather craftsmanship" 
                className="w-full h-64 md:h-80 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;