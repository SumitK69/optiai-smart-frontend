
import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CTO",
      company: "Global Finance Corp",
      quote: "OptiAI's workflow automation solution has transformed our back-office operations. We've seen a 40% reduction in processing times and significant cost savings. Their team's expertise and support have been invaluable to our digital transformation journey.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "VP of Operations",
      company: "HealthCare Partners",
      quote: "The AI-powered scheduling system from OptiAI has revolutionized how we manage our hospital resources. Patient wait times are down, staff satisfaction is up, and we're operating more efficiently than ever. I highly recommend their services.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      id: 3,
      name: "Jessica Taylor",
      title: "Director of Supply Chain",
      company: "RetailNEXT",
      quote: "OptiAI's inventory management system has given us unprecedented visibility and control over our supply chain. The predictive analytics have reduced our stockouts by 65% while decreasing our inventory costs. It's been a game-changer for our business.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      id: 4,
      name: "Robert Martinez",
      title: "CEO",
      company: "Logistics Pro",
      quote: "We've been able to reduce our fuel costs by over 20% and improve delivery times using OptiAI's route optimization platform. Their solution paid for itself within the first quarter. The ongoing support and continuous improvements make this partnership invaluable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
    }
  ];
  
  useEffect(() => {
    // Auto-advance testimonial
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials.length]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  return (
    <section id="testimonials" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Hear what our clients have to say about working with OptiAI Services.
        </p>
        
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="relative overflow-hidden pb-10">
            <div 
              className="transition-transform duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-optiblue-100"
                        />
                      </div>
                      <div>
                        <svg className="h-12 w-12 text-optiblue-200 mb-4 opacity-30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <blockquote className="text-lg md:text-xl text-gray-700 mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-medium">
                          <div className="text-optiblue-700">{testimonial.name}</div>
                          <div className="text-gray-500">{testimonial.title}, {testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-optiblue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-optiblue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-optiblue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
