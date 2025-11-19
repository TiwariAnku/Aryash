import React from "react";

const testimonials = [
  {
    name: "John Doe",
    text: "This platform helped me reach fluency quickly. Highly recommend!",
  },
  {
    name: "Jane Smith",
    text: "Great experience! The teachers are highly professional and helpful.",
  },
];

export default function Testimonials() {
  return (
    <section className="text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:border-blue-500 transition"
          >
            <p className="text-gray-300 leading-relaxed">“{testimonial.text}”</p>
            <p className="mt-4 text-blue-400 font-semibold">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
