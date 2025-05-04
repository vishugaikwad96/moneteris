
import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  // Navbar
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.testimonials': 'Testimonials',
  'nav.faq': 'FAQ',
  'nav.contact': 'Contact',
  'nav.callUs': 'Call Us',
  'nav.scheduleConsultation': 'Schedule Consultation',
  // Hero Section
  'hero.subtitle': 'Business Consulting & Audit Services',
  'hero.title1': 'Your Business,',
  'hero.title2': 'Our Integrity',
  'hero.description': 'Are you looking for reliable and professional business consulting, accounting and auditing services? Monetaris Consultech is your trusted partner in financial excellence.',
  'hero.cta': 'Get Started Today',
  'hero.trustedBy': 'Trusted by',
  'hero.businesses': 'businesses in UAE',
  'hero.description2': 'We offer comprehensive business consulting, accounting, auditing, and VAT advisory services, providing strategic financial insights to help you make informed decisions and drive business growth. Our team of highly skilled accountants, auditors, business and financial advisors in the UAE is committed to delivering tailored solutions that empower your business and ensure compliance with the latest regulations.',
  'hero.success': 'Your success starts with smart financial management, partner with us today!',
  'hero.stats.years': 'Years Experience',
  'hero.stats.clients': 'Happy Clients',
  'hero.stats.experts': 'Industry Experts',
  'hero.stats.retention': 'Client Retention',
  // About Section
  'about.subtitle': 'About Us',
  'about.title': 'Trusted Financial Expertise',
  'about.description': 'Our team of certified professionals brings decades of collective experience to your financial strategy. We stay at the forefront of evolving regulations and industry trends, ensuring reliable guidance and your sustained financial success.',
  'about.feature1.title': 'Trusted Financial Expertise',
  'about.feature1.desc': 'Our team of certified professionals brings decades of collective experience to your financial strategy. We stay at the forefront of evolving regulations and industry trends, ensuring reliable guidance and your sustained financial success.',
  'about.feature2.title': 'Tailored Solutions',
  'about.feature2.desc': 'No two businesses are alike, and neither are their financial needs. At Monetaris Consultech, we offer tailored accounting, auditing, business and financial advisory services designed to align with your unique business goals.',
  'about.feature3.title': 'Full-Spectrum Services',
  'about.feature3.desc': 'Simplify your financial operations with our comprehensive suite of services. We offer everything from accounting and tax planning to financial analysis and advisory, ensuring all your needs are met efficiently.',
  'about.why.title': 'Why Choose Monetaris Consultech?',
  'about.why.desc': 'At Monetaris Consultech, we recognize the complexities of the ever-evolving business landscape in the UAE. Our holistic approach integrates in-depth analysis, innovative strategies, and practical execution to help you overcome challenges and capitalize on opportunities.',
  'about.why.feature1': 'Dedicated Financial Protection',
  'about.why.feature2': 'Certified Industry Expertise',
  'about.why.feature3': 'Client-Focused Approach',
  'about.why.closing': 'Whether you\'re a startup, a growing enterprise, or a nonprofit organization, we equip you with the insights and tools needed to drive sustainable success.',
  // Services Section
  'services.subtitle': 'What We Offer',
  'services.title': 'Our Comprehensive Services',
  'services.description': 'Discover how Monetaris Consultech can transform your financial management experience with our comprehensive suite of services.',
  'services.1.title': 'Business Consulting',
  'services.1.desc': 'Unlock your business\'s full potential with Monetaris Consultech! Our consulting services are designed to provide personalized strategies that align with your specific goals.',
  'services.2.title': 'Auditing Services',
  'services.2.desc': 'We provide comprehensive auditing services to ensure your business remains compliant, transparent, and financially sound. Our expert auditors conduct independent assessments.',
  'services.3.title': 'Accounting Services',
  'services.3.desc': 'We offer comprehensive accounting solutions tailored to meet the needs of businesses across the UAE. From bookkeeping to financial reporting, budgeting to tax compliance.',
  'services.4.title': 'Tax Planning and Compliance',
  'services.4.desc': 'We offer expert tax planning and compliance services to ensure your business\'s financial health. From strategic planning to accurate reporting, we help you navigate tax regulations.',
  'services.cta': 'Schedule a Consultation',
  'services.learnmore': 'Learn more',
  // Testimonials Section
  'testimonials.subtitle': 'Testimonials',
  'testimonials.title': 'Our Happy Customers',
  'testimonials.description': 'Don\'t take our word for it. See what our clients have to say about their experience with Monetaris Consultech.',
  // FAQ Section
  'faq.title': 'Frequently Asked Questions',
  'faq.description': 'Find answers to common questions about Monetaris Consultech and our services.',
  'faq.more': 'Still have questions? Contact our team at',
  'faq.1.q': 'What services does Monetaris Consultech provide?',
  'faq.1.a': 'Monetaris Consultech offers a comprehensive range of financial services including business consulting, auditing services, accounting services, and tax planning and compliance. Our holistic approach ensures all your financial needs are met under one roof.',
  'faq.2.q': 'How can your accounting services benefit my business?',
  'faq.2.a': 'Our accounting services ensure accuracy, compliance, and actionable insights from your financial data. We handle everything from bookkeeping to financial reporting, allowing you to focus on growing your business while having clear visibility of your financial position.',
  'faq.3.q': 'What makes your auditing services different?',
  'faq.3.a': 'Our auditing services go beyond compliance to provide valuable business insights. We conduct thorough, independent assessments that not only ensure regulatory adherence but also identify opportunities for operational improvements and risk mitigation.',
  'faq.4.q': 'How do your tax planning services work?',
  'faq.4.a': 'Our tax planning services combine strategic foresight with technical expertise. We analyze your business structure and operations to identify legitimate tax-saving opportunities, ensure compliance with UAE regulations, and help you prepare for upcoming regulatory changes like corporate tax.',
  'faq.5.q': 'Can you help with VAT compliance in the UAE?',
  'faq.5.a': 'Yes, we provide comprehensive VAT compliance services including registration, return filing, compliance reviews, and advisory services. Our team stays up-to-date with the latest FTA regulations to ensure your business remains fully compliant while optimizing your VAT position.',
  'faq.6.q': 'Do you work with businesses of all sizes?',
  'faq.6.a': 'Absolutely. We serve businesses of all sizes from startups and SMEs to large corporations. Our approach is tailored to each client\'s specific needs, ensuring that regardless of your business size, you receive personalized attention and solutions scaled appropriately for your operations.',
  // Contact Section
  'contact.title': 'Contact Us Today',
  'contact.description': 'Have questions or need assistance? Our team is here to help you. Reach out to us today.',
  'contact.subtitle': 'Get In Touch',
  'contact.info.location': 'Office Location',
  'contact.info.location.value': 'Building No: 7, Office No: 216, Gold & Diamond Park, Al Quoz 3, Sheikh Zayed Road, Dubai, UAE',
  'contact.info.phone': 'Phone Number',
  'contact.info.email': 'Email Address',
  'contact.info.hours': 'Working Hours',
  'contact.info.hours.value': 'Mon - Fri: 9:00 AM - 6:00 PM',
  'contact.consultation.title': 'Schedule a Free Consultation',
  'contact.consultation.desc': 'Book a no-obligation consultation with our experts to discuss your business needs and how we can help you achieve your financial goals.',
  'contact.consultation.cta': 'Book Your Consultation',
  'contact.form.title': 'Send Us a Message',
  'contact.form.name': 'Full Name',
  'contact.form.email': 'Email Address',
  'contact.form.phone': 'Phone Number',
  'contact.form.subject': 'Subject',
  'contact.form.message': 'Message',
  'contact.form.submit': 'Send Message',
  'contact.form.submitting': 'Sending...',
  'contact.form.privacy': '100% data privacy guaranteed',
  // Footer
  'footer.cta.title': 'Ready to Transform Your Financial Management?',
  'footer.cta.desc': 'Join dozens of UAE businesses who have optimized their financial operations with Monetaris Consultech.',
  'footer.cta.primary': 'Schedule a Free Consultation',
  'footer.cta.secondary': 'Learn More',
  'footer.contact.email': 'Email Us',
  'footer.contact.call': 'Call Us',
  'footer.contact.visit': 'Visit Us',
  'footer.company': 'Your dedicated partner for financial success. Business consulting, auditing, accounting, and tax services tailored to your needs.',
  'footer.links': 'Quick Links',
  'footer.links.about': 'About Us',
  'footer.links.services': 'Our Services',
  'footer.links.testimonials': 'Testimonials',
  'footer.links.contact': 'Contact Us',
  'footer.services': 'Our Services',
  'footer.services.consulting': 'Business Consulting',
  'footer.services.auditing': 'Auditing Services',
  'footer.services.accounting': 'Accounting Services',
  'footer.services.tax': 'Tax Planning',
  'footer.rights': 'All Rights Reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
