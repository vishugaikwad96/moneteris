
import React from "react";
import { Briefcase, FileText, Calculator, FileSearch, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    title: "Business Consulting",
    description: "Unlock your business's full potential with Monetaris Consultech! Our consulting services are designed to provide personalized strategies that align with your specific goals. We work closely with you to understand your challenges and opportunities, delivering customized solutions that drive measurable results. Start your journey with confidence—partner with us today!",
    icon: <Briefcase className="h-8 w-8" />
  },
  {
    title: "Auditing Services",
    description: "At Monetaris Consultech, we provide comprehensive auditing services to ensure your business remains compliant, transparent, and financially sound. Our expert auditors conduct independent assessments, risk evaluations, and regulatory compliance checks, giving you a clear and accurate financial picture. We deliver precise, data-driven insights to enhance financial integrity and business performance.",
    icon: <FileSearch className="h-8 w-8" />
  },
  {
    title: "Accounting Services",
    description: "At Monetaris Consultech, we offer comprehensive accounting solutions tailored to meet the needs of businesses across the UAE. From bookkeeping to financial reporting, budgeting to tax compliance, our expert accountants ensure accuracy, efficiency, and regulatory compliance.",
    icon: <Calculator className="h-8 w-8" />
  },
  {
    title: "Tax Planning and Compliance",
    description: "We offer expert tax planning and compliance services to ensure your business's financial health. From strategic planning to accurate reporting, we help you navigate tax regulations and optimize your tax position.",
    icon: <FileText className="h-8 w-8" />
  }
];

const Services = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-monetaris-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-monetaris-secondary/10 px-4 py-1 rounded-full mb-4">
            <span className="text-monetaris-primary font-medium">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-monetaris-primary">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600">
            Discover how Monetaris Consultech can transform your financial management experience with our comprehensive suite of services.
          </p>
        </div>

        {/* Services Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-monetaris-light p-3 rounded-lg inline-block mb-4 text-monetaris-secondary group-hover:text-white group-hover:bg-monetaris-secondary transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-monetaris-primary group-hover:text-monetaris-secondary transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Services CTA */}
        <div className="mt-16 text-center">
          <Button 
            className="bg-monetaris-primary hover:bg-monetaris-dark text-white font-bold py-6 px-10 rounded-lg transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-xl text-lg group"
            onClick={scrollToContactForm}
          >
            Schedule a Consultation
            <Calendar className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
