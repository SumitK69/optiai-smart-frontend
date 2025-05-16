
import React from 'react';

const TechStackSection = () => {
  const techLogos = [
    { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
    { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
    { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" }
  ];

  return (
    <section id="tech" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Our Tech Stack</h2>
        <p className="section-subtitle">
          We leverage cutting-edge technologies to build robust and scalable enterprise solutions.
        </p>
        
        <div className="mt-12">
          <div className="tech-grid">
            {techLogos.map((tech, index) => (
              <div key={index} className="tech-item group">
                <div className="h-16 flex items-center justify-center mb-2">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="max-h-12 max-w-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="text-sm text-center text-gray-600">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-optiblue-50 to-blue-50 p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold text-center text-optiblue-700 mb-6">
            Enterprise-Grade Infrastructure
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-optiblue-600">Security</h4>
              <p className="text-gray-600 text-sm">
                SOC 2 Type II compliant with end-to-end encryption, regular security audits, and enterprise access controls.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-optiblue-600">Scalability</h4>
              <p className="text-gray-600 text-sm">
                Cloud-native architecture designed to scale seamlessly from startup to enterprise-level operations.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-optiblue-600">Reliability</h4>
              <p className="text-gray-600 text-sm">
                Multi-region deployments with automatic failover systems ensuring 99.9% uptime guaranteed by SLA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
