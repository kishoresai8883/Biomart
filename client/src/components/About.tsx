import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight, Monitor, Leaf, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <ArrowRight className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Who We Are ?</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
          Our Core Principles
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-3xl mx-auto text-center">
          Guided by our fundamental values, BioMart is dedicated to advancing the field of waste recycling, promoting environmental responsibility, and creating a lasting impact.
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Eco-Consciousness</h3>
            <p className="text-muted-foreground">
              Prioritizing environmentally friendly practices and products to minimize our carbon footprint and waste.
            </p>
          </Card>
          
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Transparency</h3>
            <p className="text-muted-foreground">
              Developing long-lasting, eco-friendly building materials to promote sustainable construction practices.
            </p>
          </Card>
          
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-muted-foreground">
              Developing long-lasting, eco-friendly building materials to promote sustainable construction practices.
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Quality</h3>
            <p className="text-muted-foreground">
              Developing long-lasting, eco-friendly building materials to promote sustainable construction practices.
            </p>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            Learn More About Us <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;