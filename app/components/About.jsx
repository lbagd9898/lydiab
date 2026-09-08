import HeroContent from "./HeroContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-30"
    >
      <div className="absolute inset-0 noise-bg bg-blue-50" />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#1B2D3E",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 40px))",
        }}
      />
      <div className="relative z-10 flex justify-center">
        <HeroContent id="about-hero" />
      </div>
    </section>
  );
}
