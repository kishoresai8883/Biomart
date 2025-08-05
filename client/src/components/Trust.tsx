import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowRight, Percent, Droplets, TrendingUp } from "lucide-react";

const Trust = () => {
  return (
    <section className="bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Why Choose Biomart?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Thousands Trust Us for<br />
              Renewable Energy Solutions
            </h2>
            <p className="text-white/80 mb-8 max-w-md">
              Experience power that's<br />
              efficient intelligent and<br />
              sustainable.
            </p>
            <Button variant="hero" size="lg">
              Make A Schedule Now <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 flex-1 ml-12">
            <Card className="bg-white p-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <Percent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-bg mb-2">
                Reduce energy<br />
                costs by up to<br />
                70%.
              </h3>
              <p className="text-gray-600 text-sm mb-6">of reference value</p>
              <div className="text-3xl font-bold text-dark-bg mb-4">89.0%</div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                SOIL HEALTH MANAGEMENT
              </div>
            </Card>
            
            <Card className="bg-primary p-4 text-white relative overflow-hidden">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                For center pivot<br />
                application
              </h3>
              <div className="text-xl font-bold mb-2">Up to 84%</div>
              <div className="text-lg font-semibold mb-4">Water efficiency</div>
              <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                WATER DEPTH
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4" />
                <span className="text-sm">Treated</span>
              </div>
            </Card>
            
            <Card className="bg-white p-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="mb-6">
                <img src="/api/placeholder/150/80" alt="Sustainable Energy" className="w-full h-16 object-cover rounded-lg" />
              </div>
              <div className="text-right">
                <p className="text-gray-600 text-sm mb-2">19/08/2021 14:20</p>
                <div className="text-xl font-bold text-dark-bg">10,000,000 LUX</div>
              </div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mt-4">
                Sustainable Energy
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;