import Experience from "./Experience";
import Education from "./Education";
import FadeIn from "./FadeIn";

export default function Tutoring() {
  return (
    <section
      className="bg-blue-100 px-6 sm:px-12 lg:px-30 pb-[100px] flex flex-col items-center gap-6 relative z-10"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))",
        marginTop: "-60px",
        paddingTop: "calc(2.5rem + 60px)",
      }}
    >
      <FadeIn>
        <h2
          className="text-4xl font-extrabold text-center"
          style={{ color: "#0D9488" }}
        >
          Tutoring
        </h2>
      </FadeIn>
      <FadeIn>
        <p className="text-lg text-gray-600">
          With over a Bachelors in Mathematics, and 5 years teaching math,
          biology, physical science, and English in Costa Rica, I'm well
          prepared to help your children conquer their learning challenges.
        </p>
      </FadeIn>
      <div className="w-full max-w-[1120px] mt-10 grid grid-cols-[1fr_4fr] gap-6">
        <FadeIn>
          <h2
            className="text-3xl font-bold self-start"
            style={{ color: "#0D9488" }}
          >
            Experience
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-6">
          <FadeIn delay={0}>
            <Experience
              imageLeft={true}
              position="English and Science Education Volunteer"
              company="Peace Corps Costa Rica"
              dates="March 2023 – May 2025"
              description="Reconstructed and expanded the science in English curriculum, a curriculum focused on teaching Costa Rican primary school students science vocabulary in English. Taught English lessons. "
            />
          </FadeIn>
          <FadeIn delay={100}>
            <Experience
              imageLeft={false}
              position="7th & 8th Grade Science Teacher"
              company="Troy Prep Charter School"
              dates="August 2021 – March 2023"
              description="Taught high school level biology course to 8th grade students which followed the NYS Living Environment curriculum. Taught chemical and physical science to 7th grade students."
            />
          </FadeIn>
          <FadeIn delay={200}>
            <Experience
              imageLeft={true}
              position="Math Teaching Fellow"
              company="Blueprint Schools Network"
              dates="August 2020 – July 2021"
              description="Planned lessons for and taught online, supplemental, small group (2-8 student) math classes using various online platforms such as Desmos and ALEKS to students in 6th, 7th, and 8th grade."
            />
          </FadeIn>
        </div>

        <div className="col-span-2 border-t border-[#0D9488]/30 my-4" />

        <FadeIn>
          <h2
            className="text-3xl font-bold self-start"
            style={{ color: "#0D9488" }}
          >
            Education
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-6">
          <FadeIn>
            <Education
              school="Hamilton College"
              degree="Bachelor of Arts in Mathematics, Minor in Hispanic Studies"
              years="2016 – 2020"
            />
          </FadeIn>
        </div>
        <div className="col-span-2 border-t border-[#0D9488]/30 my-4" />

        <FadeIn>
          <h2
            className="text-3xl font-bold self-start"
            style={{ color: "#0D9488" }}
          >
            Tutoring Services
          </h2>
        </FadeIn>
        <FadeIn>
          <ul className="flex flex-col text-lg gap-2 text-gray-700 list-disc list-inside">
            <li>Mathematics - any level</li>
            <li>Spanish - any level</li>
            <li>Science - elementary and middle school level</li>
            <li>High School Biology (excluding AP/IB)</li>
            <li>English for new learners</li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
