
import { Activity, Database, Users, Zap, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Activity className="h-10 w-10 text-optiblue-500" />,
      title: "Workflow Automation",
      description: "Streamline complex business processes with our intelligent workflow automation solutions that eliminate manual tasks and reduce operational bottlenecks."
    },
    {
      icon: <Database className="h-10 w-10 text-optiblue-500" />,
      title: "Cost Optimization Solutions",
      description: "Identify and eliminate inefficiencies in your operations with our AI-powered cost optimization tools that analyze spending patterns and suggest improvements."
    },
    {
      icon: <Users className="h-10 w-10 text-optiblue-500" />,
      title: "AI-Powered CRM",
      description: "Transform customer relationships with our intelligent CRM that predicts customer needs, automates follow-ups, and provides actionable insights."
    },
    {
      icon: <Zap className="h-10 w-10 text-optiblue-500" />,
      title: "Employee Task Automation",
      description: "Boost productivity by automating repetitive employee tasks, allowing your team to focus on high-value activities that drive business growth."
    },
    {
      icon: <Layers className="h-10 w-10 text-optiblue-500" />,
      title: "Custom Enterprise Integrations",
      description: "Seamlessly connect your existing systems with our custom integration solutions that ensure data flows smoothly across your organization."
    }
  ];

  return (
    <section id="services" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide comprehensive AI-powered solutions to optimize your business operations and reduce costs.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-optiblue-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center justify-center">
            Request Custom Solution
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
