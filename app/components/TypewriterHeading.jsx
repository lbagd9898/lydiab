"use client";
import { useEffect, useRef } from "react";

export default function TypewriterHeading({ children, className = "", style, chars, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--typewriter-width", `${chars}ch`);
      el.style.animation = "none";
      el.style.width = `${chars}ch`;
      el.style.borderRight = "none";
      return;
    }

    let delayTimer;
    const startObserver = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            delayTimer = setTimeout(() => {
              el.style.setProperty("--typewriter-width", `${chars}ch`);
              el.style.animation = `typewriter 1.5s steps(${chars}) forwards, cursor-blink 0.75s step-end 1.5s 3, cursor-hide 0.1s linear 3.75s forwards`;
            }, delay);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return observer;
    };

    if (window.__introComplete) {
      const observer = startObserver();
      return () => observer.disconnect();
    }

    let observer;
    const onIntroComplete = () => { observer = startObserver(); };
    window.addEventListener("introComplete", onIntroComplete, { once: true });
    return () => {
      window.removeEventListener("introComplete", onIntroComplete);
      observer?.disconnect();
      clearTimeout(delayTimer);
    };
  }, [chars, delay]);

  return (
    <h2 ref={ref} className={`typewriter-heading ${className}`} style={style}>
      {children}
    </h2>
  );
}
