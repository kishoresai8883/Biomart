import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowRight, Zap } from "lucide-react";
import heroBackground from "../assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 via-dark-bg/50 to-dark-bg/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            BUILDING A GREENER FUTURE<br />
            WITH RECYCLED PLASTIC
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We transform plastic waste into durable building materials for a more sustainable tomorrow. Join our journey to a cleaner world!
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Discover Our Story <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Eco-Conscious Approach</h3>
                <p className="text-white/90 text-sm">
                  <p className="text-white/90 text-sm">
                  Prioritizing environmentally friendly practices and products to minimize our carbon footprint and waste.
                </p>
                </p>
            </div>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Solutions</h3>
                <p className="text-white/90 text-sm">
                  <p className="text-white/90 text-sm">
                  Developing long-lasting, eco-friendly building materials to promote sustainable construction practices.
                </p>
                </p>
            </div>
          </Card>
          
         <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Techniques</h3>
                <p className="text-white/90 text-sm">
                  <p className="text-white/90 text-sm">
                  Leveraging innovative technology to process and repurpose plastic waste into new, useful products.
                </p>
                </p>
            </div>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide Reach</h3>
                <p className="text-white/90 text-sm">
                  <p className="text-white/90 text-sm">
                  Building a global reach to spread our sustainable products and mission, positively impacting the world.
                </p>
                </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;