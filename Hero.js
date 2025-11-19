import React from "react";

export default function Hero({ started, setStarted }) {
  return (
 <header className="relative flex items-center justify-center text-center h-[72vh] bg-gradient-to-br from-brandPrimary to-brandDarkBlue">
  <div className="relative z-10 px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
      Discover Your Perfect Career Path
    </h1>
    <p className="mt-4 text-sm md:text-base opacity-95 text-white">
      India's most advanced career assessment tool.
    </p>

    {!started && (
      <button className="mt-8 inline-flex items-center gap-2 bg-brandSecondary text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
  🚀 Start Learning
</button>

    )}
  </div>
</header>

  );
}
