
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  summary: string;
  image: string;
  description: string;
  results: string[];
}

const PortfolioSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Financial Services Automation",
      category: "Banking",
      summary: "AI-driven process automation for a leading financial institution",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "We implemented an end-to-end automation solution for a Fortune 500 financial services company that reduced manual processing time by 85% and improved accuracy by 95%. The solution included document processing, data extraction, and workflow automation.",
      results: [
        "85% reduction in processing time",
        "95% improvement in accuracy",
        "$2.3M annual cost savings",
        "Return on investment within 6 months"
      ]
    },
    {
      id: 2,
      title: "Healthcare Operations Optimization",
      category: "Healthcare",
      summary: "Streamlining patient care workflows for regional hospital network",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800",
      description: "Our team developed a custom AI solution to optimize patient scheduling, resource allocation, and inventory management for a network of 12 hospitals. The system uses predictive analytics to forecast patient volumes and optimize staff scheduling.",
      results: [
        "32% improvement in patient wait times",
        "24% reduction in operational costs",
        "Improved staff satisfaction scores",
        "Enhanced patient experience metrics"
      ]
    },
    {
      id: 3,
      title: "Manufacturing Process Intelligence",
      category: "Manufacturing",
      summary: "AI-powered quality control and predictive maintenance",
      image: "https://images.unsplash.com/photo-1581092921461-7314d15a88e7?auto=format&fit=crop&q=80&w=800",
      description: "We deployed computer vision and IoT sensors throughout the manufacturing line to detect quality issues in real-time and predict equipment failures before they occur. This comprehensive solution has transformed the client's operations.",
      results: [
        "67% reduction in quality control defects",
        "41% decrease in unplanned downtime",
        "Maintenance cost reduction of 38%",
        "Production efficiency increased by 28%"
      ]
    },
    {
      id: 4,
      title: "Retail Inventory Management",
      category: "Retail",
      summary: "Intelligent inventory forecasting and optimization",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      description: "Our AI-powered inventory management system uses machine learning to analyze historical sales data, seasonality, and market trends to optimize inventory levels across 200+ retail locations. The solution integrates with existing ERP systems.",
      results: [
        "Inventory costs reduced by 31%",
        "Out-of-stock incidents reduced by 64%",
        "Improved cash flow by $4.2M annually",
        "Enhanced customer satisfaction ratings"
      ]
    },
    {
      id: 5,
      title: "Logistics Route Optimization",
      category: "Transportation",
      summary: "AI-driven logistics planning and route optimization",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800",
      description: "We developed a sophisticated route optimization algorithm that considers traffic patterns, weather conditions, delivery priorities, and vehicle constraints to create optimal delivery routes. The system dynamically adjusts routes as conditions change.",
      results: [
        "Fuel costs reduced by 23%",
        "Delivery times improved by 18%",
        "CO2 emissions reduced by 30%",
        "Driver satisfaction increased by 45%"
      ]
    },
    {
      id: 6,
      title: "Customer Service AI Assistant",
      category: "Customer Service",
      summary: "Intelligent virtual assistant for customer support",
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800",
      description: "Our AI-powered virtual assistant handles customer inquiries across multiple channels, including web, mobile, and voice. It uses natural language processing to understand customer intent and provide personalized responses.",
      results: [
        "72% of inquiries resolved without human intervention",
        "Average response time reduced from 15 minutes to 15 seconds",
        "Customer satisfaction increased by 28%",
        "Support team now focuses on complex issues"
      ]
    }
  ];

  const handleOpenDetails = (item: PortfolioItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <section id="portfolio" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our successful projects that have delivered tangible results for our clients across various industries.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="card group cursor-pointer" onClick={() => handleOpenDetails(item)}>
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-optiblue-900/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="text-xs font-semibold bg-optiblue-600 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-optiblue-700">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-optiblue-600 border-optiblue-600 hover:bg-optiblue-50"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedItem && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-optiblue-700">{selectedItem.title}</DialogTitle>
              <DialogDescription className="text-sm text-gray-500">{selectedItem.category}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h4 className="font-semibold text-lg mb-2">Overview</h4>
              <p className="text-gray-700 mb-4">{selectedItem.description}</p>
              
              <h4 className="font-semibold text-lg mb-2">Results</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {selectedItem.results.map((result, i) => (
                  <li key={i} className="text-gray-700">{result}</li>
                ))}
              </ul>
              
              <div className="mt-6 flex justify-end">
                <Button 
                  className="bg-optiblue-600 hover:bg-optiblue-700"
                >
                  Request Similar Solution
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
