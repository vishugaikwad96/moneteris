
import React from "react";
import { Check } from "lucide-react";

const featureItems = [
  {
    title: "Financial Dashboard",
    description: "Get a comprehensive view of your financial health with our intuitive dashboard.",
    icon: "📊"
  },
  {
    title: "Budget Tracking",
    description: "Create and manage budgets to keep your spending under control.",
    icon: "💰"
  },
  {
    title: "Investment Analysis",
    description: "Track your investments and analyze performance over time.",
    icon: "📈"
  },
  {
    title: "Expense Categorization",
    description: "Automatically categorize expenses for better financial insights.",
    icon: "🏷️"
  },
  {
    title: "Bill Reminders",
    description: "Never miss a payment with automated bill reminders.",
    icon: "🔔"
  },
  {
    title: "Financial Reports",
    description: "Generate detailed reports to understand your money flow.",
    icon: "📑"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-moneteris-dark">
            Powerful Financial Tools
          </h2>
          <p className="text-lg text-gray-600">
            Discover how Moneteris can transform your financial management experience with our comprehensive suite of features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-moneteris-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-moneteris-primary/5 to-moneteris-accent/5 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Advanced Analytics" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-moneteris-dark">Advanced Financial Analytics</h3>
              <p className="text-gray-600">
                Our platform provides deep insights into your financial data, helping you make informed decisions for your future.
              </p>
              <ul className="space-y-2">
                {[
                  "Real-time financial tracking",
                  "Personalized insights based on your spending",
                  "Goal tracking with progress visualization",
                  "Custom report generation",
                  "Tax preparation assistance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-moneteris-primary mt-1"><Check size={16} /></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
