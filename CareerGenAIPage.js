// src/CareerGenAIPage.jsx

import React, { useState } from "react";


// Components
import Hero from "../components/Hero";
import IntroCard from "../components/IntroCard";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import CareerOpportunities from "../components/CareerOpportunities";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import CounsellingCTA from "../components/CounsellingCTA";
import WhatsAppButton from "../components/WhatsAppButton";
//import DataQuestion from "../data/questions";

// Data
import {
  QUESTIONS,
  CAREER_OPPORTUNITIES,
  STREAM_DESCRIPTION,
  LEARNING_PATHS,
} from "../data/questions";


export default function CareerGenAIPage() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(""));
  const [qIndex, setQIndex] = useState(0);
  const [result, setResult] = useState(null);

  // Handle option selection
  const handleAns = (opt) => {
    const updated = [...answers];
    updated[qIndex] = opt;
    setAnswers(updated);
  };

  // Score logic
  const scoreQuiz = () => {
    const score = { Science: 0, Arts: 0, Commerce: 0, Vocational: 0 };

    answers.forEach((ans) => {
      const a = ans?.toLowerCase();
      if (!a) return;

      if (a.includes("math") || a.includes("logic") || a.includes("tech") || a.includes("coding"))
        score.Science++;

      if (a.includes("draw") || a.includes("creative") || a.includes("art"))
        score.Arts++;

      if (a.includes("explain") || a.includes("social") || a.includes("business"))
        score.Commerce++;

      if (a.includes("hands") || a.includes("fix") || a.includes("build") || a.includes("practical"))
        score.Vocational++;
    });

    const topStream = Object.keys(score).sort((a, b) => score[b] - score[a])[0];

    setResult({
      stream: topStream,
      description: STREAM_DESCRIPTION[topStream],
      opportunities: CAREER_OPPORTUNITIES[topStream],
      learning: LEARNING_PATHS[topStream],
      score,
    });
  };

  const nextQ = () =>
    qIndex < QUESTIONS.length - 1 ? setQIndex(qIndex + 1) : scoreQuiz();

  const prevQ = () => qIndex > 0 && setQIndex(qIndex - 1);

  const resetQuiz = () => {
    setStarted(false);
    setResult(null);
    setAnswers(Array(QUESTIONS.length).fill(""));
    setQIndex(0);
  };

  return (
    <div className="page">

      {/* ====== HERO SECTION ====== */}
      <Hero started={started} setStarted={setStarted} />

      <main className="container">

        {/* ====== BEFORE QUIZ ====== */}
        {!started && !result && <IntroCard />}

        {/* ====== PROGRESS BAR ====== */}
        {started && !result && (
          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width: `${((qIndex + 1) / QUESTIONS.length) * 100}%`,
              }}
            />
          </div>
        )}

        {/* ====== QUIZ ====== */}
        {started && !result && (
          <Quiz
            questions={QUESTIONS}
            qIndex={qIndex}
            answers={answers}
            handleAns={handleAns}
            prevQ={prevQ}
            nextQ={nextQ}
          />
        )}

        {/* ====== RESULT ====== */}
        {result && <Result result={result} onRetake={resetQuiz} />}

        {/* ====== STATIC SECTIONS ====== */}
        <CareerOpportunities />
        <Testimonials />
        <PricingPlans />
        <CounsellingCTA />

      </main>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phone="+917000000000" />

    </div>
  );
}
