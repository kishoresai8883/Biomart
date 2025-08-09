import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How does we get Renewable Energy?",
      answer: "we're dedicated to transforming plastic waste into eco-friendly building materials that support environmental conservation."
    },
    {
      question: "How does we get Renewable Energy?",
      answer: "we're dedicated to transforming plastic waste into eco-friendly building materials that support environmental conservation."
    },
    {
      question: "How does we get Renewable Energy?",
      answer: "we're dedicated to transforming plastic waste into eco-friendly building materials that support environmental conservation."
    },
    {
      question: "How does we get Renewable Energy?",
      answer: "we're dedicated to transforming plastic waste into eco-friendly building materials that support environmental conservation."
    },
    {
      question: "How does we get Renewable Energy?",
      answer: "we're dedicated to transforming plastic waste into eco-friendly building materials that support environmental conservation."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">FAQ</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  {openFAQ === index && (
                    <p className="text-muted-foreground mt-4">{faq.answer}</p>
                  )}
                </Card>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Still have a question?</h3>
              <p className="text-muted-foreground mb-6">
                don't worry we're free for consultation, just click button
              </p>
              <Button variant="default" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div>
            <Card className="bg-dark-bg text-white p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Subscribe Now To Get Started</h3>
              <p className="text-white/80 mb-8">
                The Ultimate Guide To Planning Your Dream Web Travel Adventure With The Capital One Travel Book
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  placeholder="Enter your email address" 
                  className="bg-white/10 border-white/20 rounded-lg px-4 text-white placeholder:text-white/60"
                />
                <Button variant="hero" size="lg">
                  Subscribe now <ArrowRight className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;