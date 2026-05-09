const languages = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "Ruby", icon: "devicon-ruby-plain colored" },
];

const frameworks = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Prisma", icon: "devicon-prisma-original" },
];

const SanityIcon = () => (
  <svg viewBox="0 0 256 256" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
    <path fill="#F03E2F" d="M67.6 82.5c0 23.4 14.2 38.3 42.5 45.6l40.1 9.8c26.2 6.6 42.2 21.9 42.2 47.3 0 14.7-5 26.7-13.8 35.4C188.3 198.5 195 182 195 163c0-24.2-14.4-40.4-44-47.9l-39.7-9.6C86.7 99 71.3 84.4 71.3 57.9c0-13.5 4.5-25 12.5-33.5C73.5 33.2 67.6 56.6 67.6 82.5z"/>
    <path fill="#F03E2F" d="M176.5 174.1c0-23.2-14.3-35.8-43.5-43.5L95.2 121c-23.3-5.9-40.8-19.3-40.8-45.8 0-13.1 4.3-24.2 11.7-32.5C55.5 51.9 49 67.9 49 87c0 25.7 15.5 39.4 43.1 46.7l38.2 9.7c26.3 6.7 43.1 19.9 43.1 46.6 0 14.2-5.2 26.4-14.1 35.1C171.4 215.8 176.5 196.2 176.5 174.1z"/>
  </svg>
);

const tools = [
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "npm", icon: "devicon-npm-original-wordmark colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Sanity CMS", svg: <SanityIcon /> },
];

function TechCard({ title, items }) {
  return (
    <div
      className="relative bg-white border-2 border-[#1E3A5F] p-6 flex flex-col gap-4 flex-1"
      style={{ boxShadow: "6px 6px 4px rgba(0,0,0,0.15)" }}
    >
      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#1E3A5F] " />
      <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#1E3A5F] " />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#1E3A5F] " />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#1E3A5F] " />
      <h3 className="text-lg font-bold" style={{ color: "#1E3A5F" }}>
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {items.map(({ name, icon, svg }) => (
          <div key={name} className="flex flex-col items-center gap-1">
            {svg ? svg : <i className={`${icon} text-4xl`} />}
            <span className="text-xs text-gray-600 text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="mt-10 w-full max-w-[1120px] flex flex-col sm:flex-row gap-6">
      <TechCard title="Languages" items={languages} />
      <TechCard title="Frameworks" items={frameworks} />
      <TechCard title="Tools" items={tools} />
    </div>
  );
}
