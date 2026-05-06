import Project from "./Project";
import TechStack from "./TechStack";

export default function Webdev() {
  return (
    <section
      className="bg-gray-100 px-6 sm:px-12 lg:px-30 pt-10 pb-[100px] flex flex-col items-center relative z-20"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)",
        backgroundImage: "radial-gradient(circle, rgba(30,58,95,0.18) 2px, transparent 2px)",
        backgroundSize: "22px 22px",
      }}
    >
      <h2 className="text-4xl font-bold" style={{ color: "#1E3A5F" }}>
        Fullstack Development
      </h2>
      <p className="mt-6 text-center max-w-2xl text-lg">
        I create scalable, responsive, <em>customizable</em> websites in
        Next.js, React, Node.js, and Express.
      </p>
      <TechStack></TechStack>
      <div className="mt-10 w-full max-w-[1120px] grid grid-cols-[1fr_4fr] gap-6">
        <h2
          className="text-3xl font-bold self-start"
          style={{ color: "#1E3A5F" }}
        >
          Projects
        </h2>
        <div className="flex flex-col gap-5">
          <Project
            image="/dogbook-dash.png"
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
          <Project
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
          <Project
            image="/sophie-dashboard.png"
            title="Personal Portfolio - Sophie FM"
            description="A custom portfolio website built with Next.js, featuring a Sanity CMS integration that allows Sophie to update her own bio, projects, and experience directly through Sanity Studio without touching the codebase."
            techStack={[
              { name: "Next.js", color: "#000000" },
              { name: "TailwindCSS", color: "#38BDF8" },
              { name: "Sanity CMS", color: "#F03E2F" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
