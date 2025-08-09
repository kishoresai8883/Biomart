import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Testimonials</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Explore the Top Categories of 
              the Week and discover what's 
              trending!
            </h2>
          </div>
          
          <div>
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Helion made switching to solar effortless. From consultation to installation 
                the service was professional — and now we save hundreds every month 
                on our energy bills."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ET</span>
                </div>
                <div>
                  <h4 className="font-bold">Emma T Homeowner</h4>
                  <p className="text-muted-foreground text-sm">@Emma</p>
                </div>
                <div className="ml-auto">
                  <span className="text-2xl font-bold">2X</span>
                  <p className="text-muted-foreground text-sm">Monthly increase</p>
                </div>
              </div>
            </Card>
            
            <p className="text-muted-foreground mb-6">
              Helion made switching to solar effortless. From consultation to installation 
              the service was seamless and highly professional. Their team handled everything with care and 
              clarity. Now we run on clean energy, and we're saving 
              hundreds of dollars every month on our electricity bills.
            </p>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button variant="default" size="icon">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic">
              "Helion made switching to solar effortless. From the initial 
              consultation to the final installation, the service was seamless and 
              highly professional. Their team handled everything with care and 
              clarity. Now we run on clean energy, and we're saving 
              hundreds of dollars every month on our electricity bills."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <div>
                <h5 className="font-bold">Emma T Homeowner</h5>
                <p className="text-muted-foreground text-sm">@Emma</p>
              </div>
              <div className="ml-auto">
                <span className="text-xl font-bold">2X</span>
                <p className="text-muted-foreground text-xs">Monthly increase</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic">
              "The process was transparent and smooth. The team 
              answered all our questions and guided us through every step. We've 
              seen a noticeable drop in our energy bills, and their solar panels 
              pay for itself. We feel great knowing we're contributing to a cleaner 
              future."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LC</span>
              </div>
              <div>
                <h5 className="font-bold">Linda C.</h5>
                <p className="text-muted-foreground text-sm">@Emma</p>
              </div>
              <div className="ml-auto">
                <span className="text-xl font-bold">2X</span>
                <p className="text-muted-foreground text-xs">Monthly increase</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic">
              "Outstanding service from start to finish! The installation was quick 
              and professional, and our energy savings started immediately. 
              Helion's team was knowledgeable and made the entire process stress-free. 
              Highly recommend for anyone considering solar!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MR</span>
              </div>
              <div>
                <h5 className="font-bold">Mike Rodriguez</h5>
                <p className="text-muted-foreground text-sm">@Mike</p>
              </div>
              <div className="ml-auto">
                <span className="text-xl font-bold">3X</span>
                <p className="text-muted-foreground text-xs">Monthly increase</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;