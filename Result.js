// src/components/Result.jsx
import React from "react";

export default function Result({ result, onRetake }) {
  return (
    <section className="mx-auto mt-6 max-w-3xl rounded-xl bg-white/6 backdrop-blur p-6">
      <h2 className="text-2xl font-bold text-white/95">Your Best Stream: {result.stream}</h2>
      <p className="mt-2 text-slate-200">{result.description}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {Object.keys(result.score).map((s) => (
          <div key={s} className="rounded-md bg-white/8 px-3 py-2">
            <strong>{s}:</strong> {result.score[s]}
          </div>
        ))}
      </div>

      <h3 className="mt-5 font-semibold">Top Career Suggestions</h3>
      <ul className="mt-2 list-disc list-inside">
        {result.opportunities.slice(0, 3).map((c) => <li key={c}>{c}</li>)}
      </ul>

      <div className="mt-4 grid gap-4">
        <div className="rounded-lg bg-white/6 p-4">
          <h4 className="font-semibold">Career Opportunities in {result.stream}</h4>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {result.opportunities.map((job) => <div key={job} className="rounded-md bg-white/8 p-2">{job}</div>)}
          </div>
        </div>

        <div className="rounded-lg bg-white/6 p-4">
          <h4 className="font-semibold">Recommended Learning Path</h4>
          <ul className="mt-2 list-disc list-inside">
            {result.learning.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <button onClick={onRetake} className="w-full py-3 rounded-md bg-brandBlue">🔄 Retake Quiz</button>
        <button onClick={() => { navigator.clipboard?.writeText('I got: ' + result.stream); alert('Result copied'); }} className="w-full py-3 rounded-md bg-emerald-500">📤 Share My Results</button>
      </div>
    </section>
  );
}
