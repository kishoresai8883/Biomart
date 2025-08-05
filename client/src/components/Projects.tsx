import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import solarHouse from "../assets/solar-house-B0BKUOuh.jpg";
import commercialSolar from "../assets/commercial-solar-DgfLP2aU.jpg";
import windSolar from "../assets/wind-solar-Dwp4mxFn.jpg";
import solarWorker from "../assets/solar-worker-DQrBRQhu.jpg";
import img from "../assets/hero-background.jpg";

const Projects = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <ArrowRight className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Industry Challenges</span>
        </div>
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-6xl">
            BioMart addresses the most pressing problems faced by the waste recycling industry through sustainable solutions.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="group overflow-hidden relative">
            <img 
              src={img} 
              alt="SunGlow Power EcoSun Sector" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-bold mb-2">Pollution</h3>
              <p className="text-sm opacity-90">EcoSun Sector</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="group overflow-hidden relative">
            <img 
              src={img} 
              alt="SolarEra Solutions Sol-Eco" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-bold mb-2">Health Risks</h3>
              <p className="text-sm opacity-90">Eco-Clean</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="group overflow-hidden relative">
            <img 
              src={img} 
              alt="Commercial Solar Education" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-bold mb-2">Microplastics</h3>
              <p className="text-sm opacity-90">Innovate to the Future</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="group overflow-hidden relative">
            <img 
              src={img} 
              alt="Community Solar Solutions" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-bold mb-2">Carbon Emission</h3>
              <p className="text-sm opacity-90">Quality Environment</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden relative">
            <img 
              src={img} 
              alt="Community Solar Solutions" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-bold mb-2">Recycling Challenges</h3>
              <p className="text-sm opacity-90">Quality Environment</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden relative">
            <img 
              src={img} 
              alt="Community Solar Solutions" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-bold mb-2">Resource Conservation</h3>
              <p className="text-sm opacity-90">Quality Environment</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button variant="default" size="icon">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;