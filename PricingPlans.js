import React from "react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: ["12-question assessment", "Basic suggestions"],
    button: "Choose Free",
  },
  {
    name: "Premium",
    price: "₹999",
    features: ["Detailed PDF", "30-min counselling"],
    button: "Choose Premium",
  },
  {
    name: "Pro",
    price: "₹2499",
    features: ["3 counselling sessions", "Personal roadmap"],
    button: "Choose Pro",
  },
];

export default function PricingPlans() {
  return (
    <section className="text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Plans & Pricing</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {plans.map((p, index) => (
          <div
            key={index}
            className="bg-white/10 p-8 rounded-2xl shadow-xl border border-white/10 hover:shadow-blue-500/20 hover:border-blue-400 transition"
          >
            <h3 className="text-xl font-semibold text-center mb-3">{p.name}</h3>
            <p className="text-4xl font-bold text-blue-400 text-center">{p.price}</p>

            <ul className="mt-6 space-y-2 text-gray-300 text-sm">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <button className="w-full mt-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold">
              {p.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
