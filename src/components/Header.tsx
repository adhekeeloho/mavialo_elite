"use client"
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-amber-950">
              MAVIALO <span className="text-amber-800 font-light">ELITE</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
          <Link
              href="/" 
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about_us" 
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact" 
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* Shopping Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link href="/cart">
            
            <Button 
              variant="outline" 
              size="sm"
              className="relative border-amber-200 text-amber-900 hover:bg-amber-50 hover:border-amber-300"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-amber-900"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-amber-100">
            <div className="flex flex-col space-y-4">
            <Link
              href="/" 
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about_us" 
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact" 
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
