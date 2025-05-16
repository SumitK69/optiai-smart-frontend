
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="bg-optiblue-600 py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to supercharge your business with AI?
          </h2>
          <p className="text-xl text-optiblue-100 mb-8">
            Let's talk about how our solutions can transform your operations and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-optiblue-600 hover:bg-gray-100"
            >
              Book a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
