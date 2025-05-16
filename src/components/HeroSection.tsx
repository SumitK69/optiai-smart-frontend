
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span>OptiAI Services</span>
                <span className="block text-optiblue-600">Automate Smart. Operate Fast.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                Enterprise solutions powered by AI that reduce operational costs and optimize workflows through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-optiblue-500 hover:bg-optiblue-600">
                  Book a Demo
                </Button>
                <Button variant="outline" size="lg" className="border-optiblue-500 text-optiblue-500 hover:bg-optiblue-50">
                  See Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-64 h-64 bg-optiblue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
              <div className="absolute top-0 -right-4 w-64 h-64 bg-optiblue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
              <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "4s" }}></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="AI Data Visualization" 
                className="relative rounded-lg shadow-2xl animate-fade-in z-10"
              />
            </div>
          </div>
        </div>
        
        {/* Floating chatbot icon */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-optiblue-600 hover:bg-optiblue-700 h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
