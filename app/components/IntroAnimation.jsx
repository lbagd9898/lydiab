"use client";
import { useEffect, useState } from "react";
import HeroContent from "./HeroContent";

export default function IntroAnimation() {
  const [clipPath, setClipPath] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [done, setDone] = useState(false);
  const [heroRect, setHeroRect] = useState(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const hero = document.getElementById("about-hero");
    if (hero) {
      const r = hero.getBoundingClientRect();
      setHeroRect({ top: r.top, left: r.left, width: r.width });
    }

    setClipPath(`polygon(0px 0px, ${vw}px 0px, ${vw}px ${vh}px, 0px ${vh}px)`);

    // Drop text in on next paint
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setTextVisible(true))
    );

    // After text has dropped in + a beat, shrink the background
    const timer = setTimeout(() => {
      const aboutEl = document.getElementById("about");
      const target = aboutEl
        ? (() => {
            const r = aboutEl.getBoundingClientRect();
            return `polygon(0px ${r.top}px, ${vw}px ${r.top}px, ${vw}px ${
              r.bottom
            }px, 0px ${r.bottom - 40}px)`;
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
        transition: transitioning
          ? "clip-path 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
          : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#1B2D3E",
        }}
      />
      <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
        <HeroContent
          style={{
            position: "absolute",
            top: heroRect ? heroRect.top : 0,
            left: heroRect ? heroRect.left : 0,
            width: heroRect ? heroRect.width : undefined,
            transform: textVisible ? "translateY(0)" : "translateY(-60px)",
            opacity: heroRect && textVisible ? 1 : 0,
            transition:
              "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
          }}
        />
      </div>
    </div>
  );
}
