import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-30"
    >
      <div
        className="absolute inset-0 bg-gray-100"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(30,58,95,0.18) 2px, transparent 2px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#1B2D3E",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 40px))",
        }}
      />
      <div
        className="relative z-10 flex justify-center items-center gap-8 sm:gap-12"
        style={{ color: "#1E3A5F" }}
      >
        <div className="hidden sm:block shrink-0">
          <Image
            src="/headshot.jpeg"
            alt="Lydia Bagdon"
            width={208}
            height={208}
            className="sm:h-40 sm:w-40 lg:h-52 lg:w-52 rounded-full border-2 border-white object-cover object-top"
          />
        </div>
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold flex items-center gap-3">
            <span className="sm:hidden h-14 w-14 rounded-full border-2 border-white overflow-hidden shrink-0 inline-block">
              <Image
                src="/headshot.jpeg"
                alt="Lydia Bagdon"
                width={56}
                height={56}
                className="h-full w-full object-cover object-top scale-125"
              />
            </span>
            Lydia Bagdon
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4 font-bold">
            Full-Stack Web Developer | Bilingual STEM Educator
          </h2>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4">
            Engineering solutions and explaining concepts — from code to
            calculus.
          </h2>
        </div>
      </div>
    </section>
  );
}
