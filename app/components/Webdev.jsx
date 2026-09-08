import Project from "./Project";
import TechStack from "./TechStack";
import TypewriterHeading from "./TypewriterHeading";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function Webdev() {
  return (
    <section
      id="webdev"
      className="bg-gray-100 px-6 sm:px-12 lg:px-30 pb-[100px] flex flex-col items-center relative z-10"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))",
        backgroundImage:
          "radial-gradient(circle, rgba(30,58,95,0.12) 2px, transparent 2px)",
        backgroundSize: "22px 22px",
        marginTop: "-60px",
        paddingTop: "calc(2.5rem + 60px)",
        scrollMarginTop: "80px",
      }}
    >
      <FadeIn>
        <TypewriterHeading
          chars={26}
          delay={1000}
          className="text-2xl sm:text-4xl font-bold text-center"
          style={{ color: "#1E3A5F" }}
        >
          Full-Stack Web Development
        </TypewriterHeading>
      </FadeIn>
      <FadeIn>
        <p className="mt-6 font-bold text-center max-w-2xl text-lg sm:text-xl">
          Scalable. Responsive. Yours. I build full-stack websites tailored to
          your small business, creative project, or portfolio.
        </p>
      </FadeIn>

      <FadeIn>
        <TechStack />
      </FadeIn>
      <FadeIn></FadeIn>
      <div className="mt-10 w-full max-w-[1120px] grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6">
        <FadeIn>
          <h3
            className="text-2xl sm:text-3xl font-bold self-start"
            style={{ color: "#1E3A5F" }}
          >
            Projects
          </h3>
        </FadeIn>
        <div className="flex flex-col gap-5">
          <FadeIn delay={0}>
            <Project
              href="https://dogbook-1.onrender.com/dashboard"
              image="/dogbook-dash-2.png"
              title="Dogbook"
              description="Facebook, but make it fetch. Dogbook is a full-stack social platform where dogs can post, follow, and like — backed by PostgreSQL and secure JWT authentication."
              techStack={[
                { name: "React", color: "#61DAFB" },
                { name: "Node.js", color: "#339933" },
                { name: "PostgreSQL", color: "#336791" },
                { name: "Express", color: "#E2B96A" },
                { name: "Prisma ORM", color: "#5A67D8" },
                { name: "TailwindCSS", color: "#38BDF8" },
              ]}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <Project
              href="https://where-is-waldo-44he.onrender.com/"
              imageLeft={false}
              image="/wizards-dash.png"
              title="Wizard Catching"
              description="A full-stack photo tagging app including a backend with real-time coordinates and a highscores table."
              techStack={[
                { name: "React", color: "#61DAFB" },
                { name: "Node.js", color: "#339933" },
                { name: "Express", color: "#E2B96A" },
                { name: "Prisma ORM", color: "#5A67D8" },
                { name: "TailwindCSS", color: "#38BDF8" },
              ]}
            />
          </FadeIn>
          <FadeIn delay={200}>
            <Project
              href="https://sophiefm.vercel.app/"
              image="/sophie-dashboard.png"
              title="Personal Portfolio - Sophie FM"
              description="A custom portfolio website built with Next.js, featuring a Sanity CMS integration that allows Sophie to update her own bio, projects, and experience directly through Sanity Studio without touching the codebase."
              techStack={[
                { name: "Next.js", color: "#000000" },
                { name: "TailwindCSS", color: "#38BDF8" },
                { name: "Sanity CMS", color: "#F03E2F" },
              ]}
            />
          </FadeIn>
        </div>
      </div>
      <FadeIn>
        <div className="mt-10">
          <ContactButton text="Let's build something together" />
        </div>
      </FadeIn>
    </section>
  );
}
