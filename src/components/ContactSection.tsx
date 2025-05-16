
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in our AI services? Reach out to us today for a consultation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="company">Company Name</label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-optiblue-500 hover:bg-optiblue-600"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-optiblue-700">Our Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-optiblue-100 p-2 rounded mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optiblue-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-optiblue-100 p-2 rounded mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optiblue-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@optiai-services.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-optiblue-100 p-2 rounded mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optiblue-600">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Office Location</p>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      Suite 400<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-80 rounded-lg overflow-hidden shadow-md mt-4">
              <iframe
                title="OptiAI Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77981185952!2d-122.44036191373696!3d37.75890719930368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1684443145397!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
