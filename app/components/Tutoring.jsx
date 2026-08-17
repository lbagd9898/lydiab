import Experience from "./Experience";
import Education from "./Education";
import FadeIn from "./FadeIn";
import TypewriterHeading from "./TypewriterHeading";
import ContactButton from "./ContactButton";

export default function Tutoring() {
  return (
    <section
      id="tutoring"
      className="noise-bg bg-blue-50 px-6 sm:px-12 lg:px-30 pb-[100px] flex flex-col items-center gap-6 relative z-10"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))",
        marginTop: "-60px",
        paddingTop: "calc(2.5rem + 60px)",
      }}
    >
      <FadeIn>
        <TypewriterHeading
          chars={8}
          className="text-3xl sm:text-4xl font-extrabold text-center"
          style={{ color: "#1E3A5F" }}
        >
          Tutoring
        </TypewriterHeading>
      </FadeIn>
      <FadeIn>
        <p className="text-lg sm:text-xl font-bold max-w-5xl text-center text-gray-600">
          With over 5 years of experience teaching math, science, ESL, and
          Spanish, I know exactly what it takes for students to stop struggling
          and start mastering. I bring proven strategies, expertise, and a
          genuine investment in every student's success — so they don't just
          pass, they build real confidence.
        </p>
      </FadeIn>
      <div className="w-full max-w-[1120px] mt-10 grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6">
        <FadeIn>
          <h3
            className="text-2xl sm:text-3xl font-bold self-start"
            style={{ color: "#1E3A5F" }}
          >
            Experience
          </h3>
        </FadeIn>
        <div className="flex flex-col gap-6">
          <FadeIn delay={0}>
            <Experience
              imageLeft={false}
              position="Private Tutoring"
              company="Remote & In Person"
              dates="March 2024 – Present"
              description={`With experience tutoring test prep, math, science, and ESL, I take a student-centered approach — guiding students toward their own understanding rather than simply providing answers. The result is lasting comprehension and confident, independent learners.`}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <Experience
              imageLeft={true}
              position="English and Science Education Volunteer"
              company="Peace Corps Costa Rica"
              dates="March 2023 – May 2025"
              description={`Teaching in Costa Rica gave me the unique opportunity to plan and instruct a course called "Science in English" - a course that blended science concepts with English vocabulary for elementary students. I also taught regular English classes, and became fluent in Spanish!`}
            />
          </FadeIn>
          <FadeIn delay={200}>
            <Experience
              imageLeft={false}
              position="7th & 8th Grade Science Teacher"
              company="Troy Prep Charter School"
              dates="August 2021 – March 2023"
              description={`I taught 7th grade science and an advanced 8th grade biology course built around New York's Living Environment curriculum — guiding students all the way through to their Regents exam.`}
            />
          </FadeIn>
          <FadeIn delay={300}>
            <Experience
              imageLeft={true}
              position="Math Teaching Fellow"
              company="Blueprint Schools Network"
              dates="August 2020 – July 2021"
              description={`I planned and taught small group (2-8 student) math classes to 6th, 7th, and 8th grade students completely online due to the COVID pandemic. I utilized with a variety of online math learning platforms such as Desmos and ALEKS.`}
            />
          </FadeIn>
        </div>

        <FadeIn>
          <h3
            className="text-2xl sm:text-3xl font-bold self-start"
            style={{ color: "#1E3A5F" }}
          >
            Education
          </h3>
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

        <FadeIn>
          <h3
            className="text-2xl sm:text-3xl font-bold self-start"
            style={{ color: "#1E3A5F" }}
          >
            Tutoring Services
          </h3>
        </FadeIn>
        <FadeIn>
          <div className="relative w-full border-2 border-[#1E3A5F]">
            <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#1E3A5F]" />
            <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#1E3A5F]" />
            <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#1E3A5F]" />
            <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#1E3A5F]" />
            <table className="w-full bg-white text-gray-700">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-3 py-2 sm:px-5 sm:py-3 text-left font-extrabold tracking-widest text-xs sm:text-sm uppercase border-r border-white/20 w-1/2">
                    Subject
                  </th>
                  <th className="px-3 py-2 sm:px-5 sm:py-3 text-left font-extrabold tracking-widest text-xs sm:text-sm uppercase w-1/2">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mathematics", "Any Level"],
                  ["Spanish", "Any Level"],
                  ["Science/ELA", "Elementary and Middle School Level"],
                  ["High School Biology", "Regents Level"],
                  ["EFL/ESL", "Any Level"],
                ].map(([subject, detail]) => (
                  <tr
                    key={subject}
                    className="group border-b border-[#1E3A5F]/20 last:border-b-0"
                  >
                    <td className="px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-bold border-r border-[#1E3A5F]/20 w-1/2 bg-[#1E3A5F]/5 group-hover:bg-[#1E3A5F]/10 transition-colors">
                      {subject}
                    </td>
                    <td className="px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base text-gray-500 w-1/2 group-hover:bg-[#1E3A5F]/5 transition-colors">
                      {detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
      <FadeIn>
        <div className="mt-6">
          <ContactButton text="Contact me about my services" />
        </div>
      </FadeIn>
    </section>
  );
}
