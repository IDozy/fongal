import React, { useState } from "react";
import { motion } from "framer-motion";

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: 29,
    features: ["Up to 100 cows", "Basic health tracking", "Monthly reports"],
  },
  {
    name: "Pro",
    price: 79,
    features: [
      "Up to 500 cows",
      "Advanced health tracking",
      "Weekly reports",
      "AI-powered insights",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: 199,
    features: [
      "Unlimited cows",
      "Premium health tracking",
      "Daily reports",
      "AI-powered insights",
      "24/7 support",
    ],
  },
];

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("Pro");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  const getAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 10.8); // 10% discount for annual billing
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-md">
            <button
              className={`px-4 py-2 rounded-full ${
                billingCycle === "monthly"
                  ? "bg-green-500 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                billingCycle === "annually"
                  ? "bg-green-500 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? "border-4 border-green-500" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {plan.recommended && (
                <div className="bg-green-500 text-white text-center py-2 font-semibold">
                  Recommended
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  $
                  {billingCycle === "monthly"
                    ? plan.price
                    : getAnnualPrice(plan.price)}
                  <span className="text-base font-normal text-gray-600">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                <ul className="mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    selectedPlan === plan.name
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  {selectedPlan === plan.name ? "Selected" : "Select Plan"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedPlan && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl mb-4">
              You ve selected the <strong>{selectedPlan}</strong> plan with{" "}
              <strong>{billingCycle}</strong> billing.
            </p>
            <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors duration-300">
              Start Your Free Trial
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
