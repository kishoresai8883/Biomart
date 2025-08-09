import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
              src="https://tse1.mm.bing.net/th/id/OIP.5wQ1T1i11TRuYiA6XhCg4AHaEK?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" 
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
              src="https://www.menhealthdomain.com/wp-content/uploads/2025/08/Indian-Study-Advocates-Linking-Air-Quality-Index-to-Health-Risks.webp"
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
              src="https://th.bing.com/th/id/R.4664400c4a32d0794d2e2c7790838167?rik=76nB1WPFKVwrFA&riu=http%3a%2f%2fkatiecouric.com%2fwp-content%2fuploads%2f2023%2f01%2fmicroplastics-getty.jpg&ehk=iRUTaqOGNTrtequeVmpv9tEdaNIDYsXfc75niHsRsfw%3d&risl=&pid=ImgRaw&r=0"
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
              src="https://www.ajinomoto.com.my/sites/default/files/inline-images/annual-emissions-of-co2.jpg"
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
              src="https://tse2.mm.bing.net/th/id/OIP.0hVFUQFzxCn_qvhgm7BVLwHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
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
              src="https://www.recyclingbristol.com/wp-content/uploads/iStock-1331030753-1200x798.jpg"
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