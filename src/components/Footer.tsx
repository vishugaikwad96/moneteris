
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Shield } from "lucide-react";

const Footer = () => {
  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-monetaris-primary text-white">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Management?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join dozens of UAE businesses who have optimized their financial operations with Monetaris Consultech.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/72e146f1-6940-44e3-a811-a0340be6d63a.png" 
                  alt="Monetaris Consultech" 
                  className="h-12 p-1 rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/placeholder.svg';
                  }}
                />
                <span className="ml-3 text-xl font-serif font-bold text-monetaris-secondary">
                  Monetaris Consultech
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Your dedicated partner for financial success. Business consulting, auditing, accounting, and tax services tailored to your needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-monetaris-secondary">Quick Links</h3>
              <ul className="space-y-2">
                {["About Us", "Our Services", "Testimonials", "Contact Us"].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-monetaris-secondary">Our Services</h3>
              <ul className="space-y-2">
                {["Business Consulting", "Auditing Services", "Accounting Services", "Tax Planning"].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} – Monetaris Consultech - All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
