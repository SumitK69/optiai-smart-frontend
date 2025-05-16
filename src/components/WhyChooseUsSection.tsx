
import { Clock, Shield, Zap, Star } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-optiblue-600" />,
      title: "24/7 Support",
      description: "Our dedicated technical team is available around the clock to ensure your systems run smoothly."
    },
    {
      icon: <Star className="h-8 w-8 text-optiblue-600" />,
      title: "99.9% Uptime SLA",
      description: "We guarantee exceptional reliability with our industry-leading service level agreements."
    },
    {
      icon: <Zap className="h-8 w-8 text-optiblue-600" />,
      title: "Easy Integration",
      description: "Our solutions seamlessly integrate with your existing systems and workflows without disruption."
    },
    {
      icon: <Shield className="h-8 w-8 text-optiblue-600" />,
      title: "Scalable & Secure",
      description: "Enterprise-grade security and scalable infrastructure that grows with your business needs."
    }
  ];

  return (
    <section className="section bg-optiblue-600 text-white">
      <div className="container">
        <h2 className="section-title text-white">Why Choose Us?</h2>
        <p className="section-subtitle text-optiblue-100">
          We deliver enterprise-grade AI solutions with unmatched reliability, support, and proven results.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors border border-white/20 shadow-lg"
            >
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-optiblue-100">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Proven Cost Savings</h3>
            <p className="mb-4 text-optiblue-100">
              Our clients typically see a return on investment within the first 6 months. Our AI solutions have helped businesses:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-optiblue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Reduce operational costs by up to 40%</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-optiblue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Increase employee productivity by an average of 35%</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-optiblue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Optimize workflows resulting in 28% faster processing times</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-optiblue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Improve decision-making accuracy by up to 90%</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-optiblue-500 rounded-lg transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
              alt="Data visualization"
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
