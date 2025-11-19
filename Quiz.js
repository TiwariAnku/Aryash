// src/components/Quiz.jsx
import React from "react";

export default function Quiz({ questions, qIndex, answers, handleAns, prevQ, nextQ }) {
  const q = questions[qIndex];
  return (
    <section className="mx-auto mt-6 max-w-3xl rounded-xl bg-white/6 backdrop-blur p-6">
      <h2 className="text-lg font-semibold">Question {qIndex + 1} / {questions.length}</h2>
      <p className="mt-3 text-base">{q.q}</p>

      <div className="mt-4 grid gap-3">
        {q.opts.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAns(opt)}
            className={`text-left p-3 rounded-lg border transition ${
              answers[qIndex] === opt
                ? "bg-blue-600/30 border-blue-400"
                : "bg-white/6 border-transparent hover:bg-white/10"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={prevQ}
          disabled={qIndex === 0}
          className="px-4 py-2 rounded-md bg-slate-700 disabled:opacity-40"
        >
          ← Previous
        </button>
        <button onClick={nextQ} className="px-4 py-2 rounded-md bg-brandBlue">
          {qIndex === questions.length - 1 ? "Submit" : "Next →"}
        </button>
      </div>
    </section>
  );
}
