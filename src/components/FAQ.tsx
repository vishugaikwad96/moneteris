
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What services does Monetaris Consultech provide?",
    answer: "Monetaris Consultech offers a comprehensive range of financial services including business consulting, auditing services, accounting services, and tax planning and compliance. Our holistic approach ensures all your financial needs are met under one roof."
  },
  {
    question: "How can your accounting services benefit my business?",
    answer: "Our accounting services ensure accuracy, compliance, and actionable insights from your financial data. We handle everything from bookkeeping to financial reporting, allowing you to focus on growing your business while having clear visibility of your financial position."
  },
  {
    question: "What makes your auditing services different?",
    answer: "Our auditing services go beyond compliance to provide valuable business insights. We conduct thorough, independent assessments that not only ensure regulatory adherence but also identify opportunities for operational improvements and risk mitigation."
  },
  {
    question: "How do your tax planning services work?",
    answer: "Our tax planning services combine strategic foresight with technical expertise. We analyze your business structure and operations to identify legitimate tax-saving opportunities, ensure compliance with UAE regulations, and help you prepare for upcoming regulatory changes like corporate tax."
  },
  {
    question: "Can you help with VAT compliance in the UAE?",
    answer: "Yes, we provide comprehensive VAT compliance services including registration, return filing, compliance reviews, and advisory services. Our team stays up-to-date with the latest FTA regulations to ensure your business remains fully compliant while optimizing your VAT position."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Absolutely. We serve businesses of all sizes from startups and SMEs to large corporations. Our approach is tailored to each client's specific needs, ensuring that regardless of your business size, you receive personalized attention and solutions scaled appropriately for your operations."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-monetaris-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-monetaris-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about Monetaris Consultech and our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left text-monetaris-dark hover:text-monetaris-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Support */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions? Contact our team at{" "}
            <a href="mailto:info@monetaris.ae" className="text-monetaris-primary font-medium hover:underline">
              info@monetaris.ae
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
