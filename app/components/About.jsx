"use client";
import { AnimatedBackground } from "animated-backgrounds";

export default function About() {
  const interactionConfig = {
    effect: "attract",
    strength: 0.8,
    radius: 150,
    continuous: true,
  };

  return (
    <section className="relative py-40 px-6 sm:px-12 lg:px-30">
      <div className="absolute inset-0 bg-gray-100"></div>
      <div
        className="absolute inset-0 bg-blue-400"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 40px))",
        }}
      >
        <AnimatedBackground
          animationName="quantumField"
          theme="portfolio"
          interactive={true}
          interactionConfig={interactionConfig}
          style={{ zIndex: 1 }}
        ></AnimatedBackground>
      </div>
      <div
        className="relative z-10 flex justify-center"
        style={{ color: "#1E3A5F" }}
      >
        <div className="text-white">
          <h1 className="text-6xl font-bold">lydia bagdon</h1>
          <h2 className="text-4xl mt-4 font-bold">
            fullstack web developer & bilingual STEM educator
          </h2>
          <h2 className="text-2xl mt-4">
            Engineering solutions and explaining concepts — from code to
            calculus.
          </h2>
        </div>
      </div>
    </section>
  );
}
