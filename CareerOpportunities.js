// src/components/CareerOpportunities.jsx
import React from "react";

export default function CareerOpportunities() {
  return (
    <section className="mx-auto mt-12 w-[92%] max-w-6xl rounded-2xl bg-white text-slate-900 p-10 shadow-xl">
      <h2 className="text-2xl font-bold text-center">Career Opportunities for Class 8–10 Students</h2>
      <p className="mt-2 text-center text-slate-600">Even now, you can start building skills and exploring real future paths.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-slate-50 p-5 border">
          <h3 className="font-semibold">🔬 Science & Technology</h3>
          <p className="mt-2 text-sm text-slate-600">Careers like AI Engineer, Researcher, Software Developer, or Scientist.</p>
          <ul className="mt-3 list-disc list-inside text-sm text-slate-700">
            <li>Learn programming (Python, Java, Scratch)</li>
            <li>Do science fair / robotics projects</li>
            <li>Study math & logical thinking</li>
          </ul>
        </div>

        <div className="rounded-xl bg-slate-50 p-5 border">
          <h3 className="font-semibold">💼 Commerce & Business</h3>
          <p className="mt-2 text-sm text-slate-600">Chartered Accountant, Entrepreneur, Financial Analyst, Economist.</p>
          <ul className="mt-3 list-disc list-inside text-sm text-slate-700">
            <li>Understand business and money basics</li>
            <li>Practice Excel or basic finance</li>
            <li>Develop leadership & communication skills</li>
          </ul>
        </div>

        <div className="rounded-xl bg-slate-50 p-5 border">
          <h3 className="font-semibold">🎨 Arts & Creativity</h3>
          <p className="mt-2 text-sm text-slate-600">Graphic Designer, Content Creator, Writer, Psychologist.</p>
          <ul className="mt-3 list-disc list-inside text-sm text-slate-700">
            <li>Practice drawing, writing, or storytelling</li>
            <li>Explore graphic design or video editing</li>
            <li>Read and communicate ideas</li>
          </ul>
        </div>

        <div className="rounded-xl bg-slate-50 p-5 border">
          <h3 className="font-semibold">🛠️ Skilled Trades & Vocational</h3>
          <p className="mt-2 text-sm text-slate-600">Technician, Electrician, Drone Operator, Videographer.</p>
          <ul className="mt-3 list-disc list-inside text-sm text-slate-700">
            <li>Learn hands-on skills (DIY, repair)</li>
            <li>Practice photography or filmmaking</li>
            <li>Take short technical courses or internships</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
