import { Card, CardContent } from "./ui/card";
import { Award, Clock, Heart, Users } from "lucide-react";

const CraftsmanshipStory = () => {
  const stats = [
    { icon: Clock, number: "25+", label: "Years of Experience" },
    { icon: Users, number: "10K+", label: "Happy Customers" },
    { icon: Award, number: "50+", label: "Design Awards" },
    { icon: Heart, number: "100%", label: "Handcrafted" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
              The Art of 
              <span className="block text-amber-800">Craftsmanship</span>
            </h2>
            
            <p className="text-lg text-amber-900 mb-6 leading-relaxed">
              At Mavialo Elite, every piece tells a story of dedication, passion, and uncompromising quality. 
              Our master craftsmen use traditional techniques passed down through generations, combined with 
              modern innovation to create leather goods that are both timeless and contemporary.
            </p>
            
            <p className="text-lg text-amber-900 mb-8 leading-relaxed">
              We source only the finest full-grain leather from trusted suppliers, ensuring each piece 
              develops a unique patina that becomes more beautiful with age. Every stitch is placed with 
              intention, every edge is finished by hand.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-amber-900 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-amber-950 mb-1">{stat.number}</div>
                    <div className="text-amber-800 text-sm font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=700&fit=crop" 
                alt="Leather craftsmanship process" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-amber-900 text-white p-4 rounded-full shadow-xl">
              <Award className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-amber-900 p-4 rounded-full shadow-xl">
              <Heart className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipStory;