import Image from "next/image";

export default function HeroContent({ id, style, className = "" }) {
  return (
    <div
      id={id}
      style={style}
      className={`flex items-center gap-8 sm:gap-12 ${className}`}
    >
      <div className="hidden sm:block shrink-0">
        <Image
          src="/chalkboard.png"
          alt="Lydia Bagdon"
          width={600}
          height={600}
          quality={90}
          className="sm:h-40 sm:w-40 lg:h-52 lg:w-52 rounded-full border-2 border-white object-cover object-[30%_center]"
        />
      </div>
      <div className="text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold flex items-center gap-3">
          <span className="sm:hidden h-14 w-14 rounded-full border-2 border-white overflow-hidden shrink-0 inline-block">
            <Image
              src="/chalkboard.png"
              alt="Lydia Bagdon"
              width={300}
              height={300}
              quality={90}
              className="h-full w-full object-cover object-[10%_center] scale-125"
            />
          </span>
          Lydia Bagdon
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4 font-bold">
          Bilingual STEM Educator | Full-Stack Web Development
        </h2>
        <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4">
          Explaining concepts and engineering solutions — from code to
          calculus.
        </h2>
      </div>
    </div>
  );
}
