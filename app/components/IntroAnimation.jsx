"use client";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [clipPath, setClipPath] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [done, setDone] = useState(false);
  const [textPaddingTop, setTextPaddingTop] = useState(0);
  const [textPaddingX, setTextPaddingX] = useState(24);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("nav");
    const navH = nav ? nav.getBoundingClientRect().height : 0;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const topPadding = vw >= 1024 ? 160 : vw >= 640 ? 128 : 80;
    setTextPaddingTop(navH + topPadding);
    // Match About section's responsive px-6 / sm:px-12 / lg:px-30 so text
    // wraps identically and the overlay text lands at the same X as the page.
    setTextPaddingX(vw >= 1024 ? 120 : vw >= 640 ? 48 : 24);

    setClipPath(`polygon(0px 0px, ${vw}px 0px, ${vw}px ${vh}px, 0px ${vh}px)`);

    // Drop text in on next paint
    requestAnimationFrame(() => requestAnimationFrame(() => setTextVisible(true)));

    // After text has dropped in + a beat, shrink the background
    const timer = setTimeout(() => {
      const aboutEl = document.getElementById("about");
      const target = aboutEl
        ? (() => {
            const r = aboutEl.getBoundingClientRect();
            return `polygon(0px ${r.top}px, ${vw}px ${r.top}px, ${vw}px ${r.bottom}px, 0px ${r.bottom - 40}px)`;
          })()
        : `polygon(0px 0px, ${vw}px 0px, ${vw}px 560px, 0px 520px)`;

      setTransitioning(true);
      setClipPath(target);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== "clip-path") return;
    window.__introComplete = true;
    window.dispatchEvent(new CustomEvent("introComplete"));
    setDone(true);
  };

  if (done) return null;

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        ...(clipPath ? { clipPath } : {}),
        transition: transitioning ? "clip-path 1.2s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#000000" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: `${textPaddingTop}px`,
          paddingLeft: `${textPaddingX}px`,
          paddingRight: `${textPaddingX}px`,
          color: "white",
        }}
      >
        <div
          style={{
            transform: textVisible ? "translateY(0)" : "translateY(-60px)",
            opacity: textVisible ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
          }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">lydia bagdon</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4 font-bold">
            full-stack web developer & bilingual STEM educator
          </h2>
          <h2 className="text-lg sm:text-xl lg:text-2xl mt-4">
            Engineering solutions and explaining concepts — from code to calculus.
          </h2>
        </div>
      </div>
    </div>
  );
}
