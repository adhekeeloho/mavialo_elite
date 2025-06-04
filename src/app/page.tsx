import CraftsmanshipStory from "@/components/CraftmanshipStory";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import supabase from "@/config/supabase";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <ProductShowcase />
      <CraftsmanshipStory />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
