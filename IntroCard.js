// src/components/IntroCard.jsx
import React from "react";

export default function IntroCard() {
  return (
    <section className="mx-auto mt-8 max-w-3xl rounded-xl bg-white/6 backdrop-blur-md p-6 shadow-md">
      <h2 className="text-xl font-semibold">✨ What This Test Will Do</h2>
      <p className="mt-2 text-sm text-slate-200">
        Answer 12 simple questions and let AI discover your natural strengths, interests, abilities, and the stream you are best suited for.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-md bg-white/8 p-3">🎯 Finds Your Strengths</div>
        <div className="rounded-md bg-white/8 p-3">📘 Suggests Best Academic Stream</div>
        <div className="rounded-md bg-white/8 p-3">🚀 Shows Future-Ready Careers</div>
        <div className="rounded-md bg-white/8 p-3">🤖 Gives AI-Based Guidance</div>
      </div>
    </section>
  );
}
