
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: {
      monthly: "$0",
      yearly: "$0"
    },
    features: [
      "Basic Financial Dashboard",
      "Limited Transaction History",
      "Budget Creation Tools",
      "Mobile App Access",
      "Email Support"
    ],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    description: "For individuals serious about finances",
    price: {
      monthly: "$12",
      yearly: "$120"
    },
    features: [
      "Advanced Financial Dashboard",
      "Unlimited Transaction History",
      "Customizable Budget Templates",
      "Investment Tracking",
      "Bill Payment Reminders",
      "Priority Support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Business",
    description: "For small businesses and teams",
    price: {
      monthly: "$39",
      yearly: "$390"
    },
    features: [
      "All Pro Features",
      "Team Collaboration Tools",
      "Multi-account Management",
      "Advanced Analytics & Reports",
      "API Access",
      "Dedicated Account Manager",
      "Custom Integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-moneteris-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-moneteris-dark">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the perfect plan that works for you. No hidden fees or surprises.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!annual ? 'text-moneteris-primary font-semibold' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${annual ? 'bg-moneteris-primary' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm flex items-center ${annual ? 'text-moneteris-primary font-semibold' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 bg-moneteris-accent/30 text-moneteris-secondary text-xs py-0.5 px-1 rounded">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden ${plan.popular ? 'border-2 border-moneteris-primary shadow-lg scale-105 z-10 bg-white' : 'border border-gray-200 shadow-sm bg-white'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 w-full bg-moneteris-primary text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold text-moneteris-dark mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-moneteris-dark">
                    {annual ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {annual ? '/year' : '/month'}
                  </span>
                </div>
                
                <Button 
                  className={`w-full mb-6 ${plan.popular ? 'bg-moneteris-primary hover:bg-moneteris-secondary' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {plan.cta}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-moneteris-primary mt-1"><Check size={16} /></span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Money Back Guarantee */}
        <div className="text-center mt-12 text-gray-500">
          All plans come with a 14-day money-back guarantee
        </div>
      </div>
    </section>
  );
};

export default Pricing;
