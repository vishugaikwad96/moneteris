
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-gradient-to-b from-monetaris-light to-white bg-hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-block bg-monetaris-secondary/10 px-4 py-1 rounded-full">
              <span className="text-monetaris-primary font-medium">Integrated Tax, Accounting, and Business Advisory Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-monetaris-dark">
              <span className="bg-gradient-to-r from-monetaris-primary to-monetaris-secondary bg-clip-text text-transparent">Your Business,</span> Our Integrity
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Are you looking for reliable and professional business consulting, accounting and auditing services? Monetaris Consultech is your trusted partner in financial excellence.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-monetaris-primary to-monetaris-secondary rounded-lg blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Business Consulting" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second part of the hero - Additional information */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            We offer comprehensive business consulting, accounting, auditing, and TAX advisory services, 
            providing strategic financial insights to help you make informed decisions and drive business growth.
            Our team of highly skilled accountants, auditors, business and financial advisors in the UAE is committed 
            to deliver tailored solutions that empower your business and ensure compliance with the latest regulations.
          </p>
          <p className="text-lg font-semibold text-monetaris-primary mt-4 transform hover:scale-105 transition-transform cursor-default">
            Your success starts with smart financial management, partner with us today!
          </p>
        </div>
      </div>

      {/* Stats section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "40+", label: "Cumulative Years Experience" },
            { value: "100+", label: "Successful Client Delivery" },
            { value: "20+", label: "Industry Experts" },
            { value: "100%", label: "Client Retention" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transform hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl md:text-4xl font-bold text-monetaris-primary mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
