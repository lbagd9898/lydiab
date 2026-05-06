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

const tools = [
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "npm", icon: "devicon-npm-original-wordmark colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
];

function TechCard({ title, items }) {
  return (
    <div className="relative bg-white border-2 border-black p-6 flex flex-col gap-4 flex-1">
      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-black" />
      <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-black" />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-black" />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-black" />
      <h3 className="text-lg font-bold" style={{ color: "#1E3A5F" }}>
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {items.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center gap-1">
            <i className={`${icon} text-4xl`} />
            <span className="text-xs text-gray-600 text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="mt-10 w-full max-w-[1120px] flex flex-row gap-6">
      <TechCard title="Languages" items={languages} />
      <TechCard title="Frameworks" items={frameworks} />
      <TechCard title="Tools" items={tools} />
    </div>
  );
}
