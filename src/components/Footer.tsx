import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">MAVIALO ELITE</h3>
            <p className="text-amber-200 mb-6 max-w-md leading-relaxed">
              Crafting exceptional leather goods since 1998. We believe in the beauty of 
              handmade products that tell a story and stand the test of time.
            </p>
            
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-amber-950">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-amber-950">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-amber-950">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-amber-200">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-amber-200">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <span>hello@mavialolite.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-8 text-center text-amber-200">
          <p>&copy; 2024 Mavialo Elite. All rights reserved. Crafted with passion for leather excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;