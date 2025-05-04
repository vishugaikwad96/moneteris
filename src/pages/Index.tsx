import React, { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info@monetaris.ae?subject=${encodeURIComponent(formData.subject || 'Website Contact Form')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show toast notification
    toast.success("Opening email client to send your message to info@monetaris.ae");
    
    setIsSubmitting(false);
    
    // Optional: Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 bg-monetaris-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-monetaris-secondary/10 px-4 py-1 rounded-full mb-4">
            <span className="text-monetaris-primary font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-monetaris-primary">
            Contact Us Today
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? Our team is here to help you. Reach out to us today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Office Location",
                  content: "Building No: 7, Office No: 216, Gold & Diamond Park, Al Quoz 3, Sheikh Zayed Road, Dubai, UAE"
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Phone Number",
                  content: "+971 42297665"
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email Address",
                  content: "info@monetaris.ae"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all transform hover:-translate-y-1 group"
                >
                  <div className="text-monetaris-secondary mb-3 group-hover:text-monetaris-primary transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-monetaris-primary mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-monetaris-primary mb-4">Schedule a Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Book a no-obligation consultation with our experts to discuss your business needs and how we can help you achieve your financial goals.
              </p>
              <Button 
                className="bg-monetaris-primary hover:bg-monetaris-dark text-white w-full py-6 text-lg"
                onClick={() => {
                  const contactForm = document.getElementById("contact-form");
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div id="contact-form" className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-monetaris-primary mb-6">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-monetaris-primary focus:border-monetaris-primary transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-monetaris-primary focus:border-monetaris-primary transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-monetaris-primary focus:border-monetaris-primary transition-all"
                    placeholder="+971 12345678"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-monetaris-primary focus:border-monetaris-primary transition-all"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-monetaris-primary focus:border-monetaris-primary transition-all"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-monetaris-primary hover:bg-monetaris-dark text-white w-full py-6 text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
                  <Shield className="h-4 w-4 text-monetaris-secondary mr-2" />
                  <p>100% data privacy guaranteed</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
