import React from "react";

export default function CounsellingCTA() {
  return (
    <section className="text-white py-16">
      <div className="bg-blue-600/10 rounded-2xl max-w-4xl mx-auto text-center p-10 
                      shadow-lg border border-blue-500/20 backdrop-blur-xl">
        <h3 className="text-2xl font-bold mb-3">Need Expert Counselling?</h3>
        <p className="text-gray-300 mb-6">
          Book a session with our certified counsellors to get a personalized roadmap.
        </p>

        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
          Book a Counselling Session
        </button>
      </div>
    </section>
  );
}
