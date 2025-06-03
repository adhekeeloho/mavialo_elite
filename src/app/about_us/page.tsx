import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-950 mb-6">
              About <span className="text-amber-800">MAVIALO ELITE</span>
            </h1>
            <p className="text-xl text-amber-900 leading-relaxed">
              Since our founding, we've been dedicated to creating exceptional leather goods 
              that combine traditional craftsmanship with modern design sensibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-950 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                MAVIALO ELITE was born from a passion for quality and a deep respect for the 
                art of leather crafting. What started as a small workshop has grown into a 
                brand synonymous with excellence and sophistication.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every piece we create tells a story of dedication, skill, and attention to 
                detail. We believe that true luxury lies not just in appearance, but in the 
                quality that endures through time.
              </p>
              <Button className="bg-amber-900 hover:bg-amber-800 text-white">
                View Our Collection
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" 
                alt="Leather crafting workshop" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-950 mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These core principles guide everything we do at MAVIALO ELITE
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-950 mb-3">Quality</h3>
                <p className="text-gray-600">
                  We use only the finest materials and traditional techniques to ensure lasting quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-950 mb-3">Craftsmanship</h3>
                <p className="text-gray-600">
                  Every piece is handcrafted by skilled artisans with years of experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-950 mb-3">Heritage</h3>
                <p className="text-gray-600">
                  We honor traditional methods while embracing innovation and modern design.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-950 mb-3">Passion</h3>
                <p className="text-gray-600">
                  Our love for leather crafting drives us to create exceptional products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-950 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The skilled artisans and passionate individuals behind MAVIALO ELITE
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-amber-900">MC</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-950 mb-2">Master Craftsman</h3>
              <p className="text-gray-600">
                Lead artisan with over 20 years of experience in premium leather crafting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-amber-900">DD</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-950 mb-2">Design Director</h3>
              <p className="text-gray-600">
                Creative visionary who brings modern aesthetics to traditional craftsmanship.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-amber-900">QS</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-950 mb-2">Quality Specialist</h3>
              <p className="text-gray-600">
                Ensures every piece meets our exacting standards before reaching customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;