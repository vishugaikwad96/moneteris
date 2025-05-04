import React from "react";
import { Check, Briefcase, FileCheck, Calculator, Shield, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-monetaris-secondary/10 px-4 py-1 rounded-full mb-4">
            <span className="text-monetaris-primary font-medium">About Us</span>
          </div>
        </div>

        {/* Features Grid with Animation */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-3xl mb-6 text-monetaris-secondary bg-monetaris-light p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-monetaris-secondary group-hover:text-white transition-colors duration-300">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-monetaris-primary">Trusted Financial Expertise</h3>
            <p className="text-gray-600">
              Our team of certified professionals brings decades of collective experience to your financial strategy. 
              We stay at the forefront of evolving regulations and industry trends, ensuring reliable guidance and your sustained financial success.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-3xl mb-6 text-monetaris-secondary bg-monetaris-light p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-monetaris-secondary group-hover:text-white transition-colors duration-300">
              <FileCheck size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-monetaris-primary">Tailored Solutions</h3>
            <p className="text-gray-600">
              No two businesses are alike, and neither are their financial needs. At Monetaris Consultech, 
              we offer tailored accounting, auditing, business and financial advisory services designed to align with your unique business goals.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-3xl mb-6 text-monetaris-secondary bg-monetaris-light p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-monetaris-secondary group-hover:text-white transition-colors duration-300">
              <Calculator size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-monetaris-primary">Full-Spectrum Services</h3>
            <p className="text-gray-600">
              Simplify your financial operations with our comprehensive suite of services. 
              We offer everything from accounting and tax planning to financial analysis and advisory, 
              ensuring all your needs are met efficiently.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-monetaris-primary to-monetaris-secondary rounded-lg blur-xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Financial Expertise" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-monetaris-primary">Why Choose Monetaris Consultech?</h3>
              <p className="text-gray-600">
                At Monetaris Consultech, we recognize the complexities of the ever-evolving business landscape in the UAE. 
                Our holistic approach integrates in-depth analysis, innovative strategies, and practical execution to help you overcome 
                challenges and capitalize on opportunities.
              </p>
              
              <div className="space-y-4 mt-6">
                {[
                  { icon: <Shield size={20} />, text: "Dedicated financial assurance" },
                  { icon: <Award size={20} />, text: "Certified Industry Expertise" },
                  { icon: <Users size={20} />, text: "Client-Focused Approach" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="bg-monetaris-light text-monetaris-secondary p-2 rounded-full group-hover:bg-monetaris-secondary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mt-4">
                Whether you're a startup, a growing or established enterprise, family managed business or a nonprofit organization, we equip you with the insights and tools needed to drive sustainable success.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-monetaris-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-monetaris-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutSection;
