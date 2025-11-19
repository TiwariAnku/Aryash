import React from "react";

export default function Services() {
  const services = [
    {
      title: "Private Lessons",
      description: "Learn languages with personalized classes.",
      icon: "🗣️",
    },
    {
      title: "Group Learning",
      description: "Engage in interactive group sessions.",
      icon: "💬",
    },
    {
      title: "Online Classes",
      description: "Learn from anywhere with flexible online options.",
      icon: "🌍",
    },
  ];

  return (
    <section className="text-white py-16 bg-blue-700">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 p-6 rounded-xl shadow-xl hover:shadow-blue-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-center">{service.icon} {service.title}</h3>
            <p className="mt-2 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
