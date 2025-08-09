import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ArrowRight, Monitor, Leaf, Battery } from "lucide-react";
import Bricks from "../assets/Bricks.jpg";
import Bag from "../assets/JuteBag.jpg";
import solarWorker from "../assets/solar-worker-DQrBRQhu.jpg";
import windSolar from "../assets/wind-solar-Dwp4mxFn.jpg";
import img from "../assets/hero-background.jpg"

const Services = () => {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <ArrowRight className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Our Services</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Building a Sustainable Future with Innovative Recycling Solutions
        </h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          In a world where resources are finite, it's our responsibility to innovate and find new ways to recycle and reuse. Together, we can build a sustainable future and leave a lasting legacy for our children.
        </p>
        
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <Card className="group overflow-hidden">
            <div className="relative">
              <img 
                src="https://ptvnews.ph/wp-content/uploads/2018/09/material-recovery-facility.jpg" 
                alt="Adaptive Home" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Meterial Recovery Facility Management</h3>
              <p className="text-muted-foreground">
                BioMart's recycling technologies minimize plastic waste pollution, reducing its harmful impact on land, oceans, and waterways.
              </p>
              <Button variant="default" size="sm" className="mt-4">
              Explore More <ArrowRight className="ml-2" />
            </Button>
            </div>
          </Card>
          
          <Card className="group overflow-hidden">
            <div className="relative">
              <img 
                src="https://www.kelvinindia.in/blog/wp-content/uploads/2024/05/solid-waste-management.jpeg" 
                alt="services" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Battery className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Solid Waste Management Frameworks</h3>
              <p className="text-muted-foreground">
                Our responsible to ensure the safe disposal of plastic waste, reducing the release of toxic chemicals and protecting human health.
              </p>
              <Button variant="default" size="sm" className="mt-4">
              Explore More <ArrowRight className="ml-2" />
            </Button>
            </div>
          </Card>
          
          <Card className="group overflow-hidden">
            <div className="relative">
              <img 
                src="https://laplife.in/wp-content/uploads/2018/07/e-waste-managment2.jpg" 
                alt="Solar" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">E-Waste Management</h3>
              <p className="text-muted-foreground">
                We offer innovative solutions to overcome the difficulties and expenses of plastic recycling, making it more accessible and efficient.
              </p>
              <Button variant="default" size="sm" className="mt-4">
              Explore More <ArrowRight className="ml-2" />
            </Button>
            </div>
          </Card>

          <Card className="group overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.wisegeek.com/garbage-on-street.jpg" 
                alt="Solar" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Garbage & Trash Analysis</h3>
              <p className="text-muted-foreground">
                We offer innovative solutions to overcome the difficulties and expenses of plastic recycling, making it more accessible and efficient.
              </p>
              <Button variant="default" size="sm" className="mt-4">
              Explore More <ArrowRight className="ml-2" />
            </Button>
            </div>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Building a Greener Future with<br />
              Biomart's Orangutan Bricks
            </h3>
            <p className="text-muted-foreground mb-8">
              At Biomart, we’ve developed a patent-pending technology that transforms 100% plastic, glass, and non-woven waste into ultra-durable, eco-friendly construction bricks — without releasing any pollutants into the environment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="group overflow-hidden">
              <div className="relative">
                <img 
                  src={Bricks} 
                  alt="Adaptive Home" 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Monitor className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-2">Bricks</h4>
                <p className="text-sm text-muted-foreground">
                  Our eco-friendly recycling processes reduce the carbon emissions associated with plastic production, transportation, and disposal.
                </p>
                <Button variant="default" size="sm" className="mt-4">
              Explore More <ArrowRight className="ml-2" />
            </Button>
              </div>
            </Card>
            
            <Card className="group overflow-hidden">
              <div className="relative">
                <img 
                  src={Bag} 
                  alt="Standby Generator" 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Battery className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-2">Jute Bags</h4>
                <p className="text-sm text-muted-foreground">
                  Our eco-friendly recycling processes reduce the carbon emissions associated with plastic production, transportation, and disposal.
                </p>
                <Button variant="default" size="sm" className="mt-4">
              Explore More <ArrowRight className="ml-2" />
            </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;