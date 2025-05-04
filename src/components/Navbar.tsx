
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/72e146f1-6940-44e3-a811-a0340be6d63a.png" 
                alt="Monetaris Consultech" 
                className={`transition-all duration-300 ${scrolled ? "h-10" : "h-12"}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }}
              />
              <span className={`ml-2 text-monetaris-secondary font-serif font-semibold transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}>
                Monetaris Consultech
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: "about", label: t('nav.about') },
              { id: "services", label: t('nav.services') }, 
              { id: "testimonials", label: t('nav.testimonials') }, 
              { id: "faq", label: t('nav.faq') }, 
              { id: "contact", label: t('nav.contact') }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="text-gray-600 hover:text-monetaris-primary px-4 py-2 rounded-md transition-colors relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-monetaris-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-monetaris-primary text-monetaris-primary hover:bg-monetaris-primary hover:text-white flex items-center gap-2"
            >
              <Phone size={16} />
              <span>{t('nav.callUs')}</span>
            </Button>
            <Button 
              size="sm"
              className="bg-monetaris-primary text-white hover:bg-monetaris-dark flex items-center gap-2"
              onClick={scrollToContactForm}
            >
              <Calendar size={16} />
              <span>{t('nav.scheduleConsultation')}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-600 hover:text-monetaris-primary focus:outline-none p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {[
                { id: "about", label: t('nav.about') },
                { id: "services", label: t('nav.services') }, 
                { id: "testimonials", label: t('nav.testimonials') }, 
                { id: "faq", label: t('nav.faq') }, 
                { id: "contact", label: t('nav.contact') }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="text-gray-600 hover:text-monetaris-primary px-4 py-3 rounded-md transition-colors hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100 mt-3">
                <Button 
                  variant="outline" 
                  className="border-monetaris-primary text-monetaris-primary hover:bg-monetaris-primary hover:text-white w-full justify-center"
                >
                  <Phone size={16} className="mr-2" />
                  <span>{t('nav.callUs')}</span>
                </Button>
                <Button 
                  className="bg-monetaris-primary text-white hover:bg-monetaris-dark w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToContactForm();
                  }}
                >
                  <Calendar size={16} className="mr-2" />
                  <span>{t('nav.scheduleConsultation')}</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
