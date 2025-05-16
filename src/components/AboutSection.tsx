
import { Cloud, Database, Brain, Cpu } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About OptiAI Services</h2>
        <p className="section-subtitle">
          We're revolutionizing enterprise operations with AI-driven automation solutions 
          that reduce costs and optimize workflows.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-optiblue-700">Our Mission</h3>
            <p className="text-gray-700">
              Our core mission is reducing employee costs and optimizing workflows through intelligent automation.
              We believe that by leveraging the power of artificial intelligence, businesses can achieve unprecedented
              levels of efficiency and productivity.
            </p>
            
            <h3 className="text-2xl font-bold text-optiblue-700 pt-4">Why Choose OptiAI?</h3>
            <p className="text-gray-700">
              With our expertise in cutting-edge AI technologies, we create custom solutions that seamlessly integrate
              with your existing systems. Our team of experts is committed to delivering measurable results that
              drive business success.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="flex items-center text-gray-700">
                <span className="bg-optiblue-100 p-1.5 rounded mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optiblue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Reduced Operational Costs
              </div>
              <div className="flex items-center text-gray-700">
                <span className="bg-optiblue-100 p-1.5 rounded mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optiblue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Increased Productivity
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex items-center text-gray-700">
                <span className="bg-optiblue-100 p-1.5 rounded mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optiblue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Optimized Workflow
              </div>
              <div className="flex items-center text-gray-700">
                <span className="bg-optiblue-100 p-1.5 rounded mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optiblue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Enhanced Decision-Making
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-optiblue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <Cpu size={32} className="text-optiblue-600" />
              </div>
              <h4 className="font-bold mb-2">AI</h4>
              <p className="text-sm text-gray-600">Advanced artificial intelligence algorithms</p>
            </div>
            
            <div className="bg-optiblue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <Brain size={32} className="text-optiblue-600" />
              </div>
              <h4 className="font-bold mb-2">ML</h4>
              <p className="text-sm text-gray-600">Machine learning models that adapt to your business</p>
            </div>
            
            <div className="bg-optiblue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <Database size={32} className="text-optiblue-600" />
              </div>
              <h4 className="font-bold mb-2">Automation</h4>
              <p className="text-sm text-gray-600">End-to-end workflow automation solutions</p>
            </div>
            
            <div className="bg-optiblue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <Cloud size={32} className="text-optiblue-600" />
              </div>
              <h4 className="font-bold mb-2">Cloud</h4>
              <p className="text-sm text-gray-600">Secure cloud infrastructure for reliable operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
