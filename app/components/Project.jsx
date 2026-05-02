export default function Project({ image, title, description, techStack }) {
  return (
    <div className="grid grid-cols-2 rounded-2xl shadow-md shadow-gray-300 overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-400 cursor-pointer">
      <div className="flex items-center justify-center bg-gray-50 p-4 h-[307px]">
        <img src={image} alt={title} className="w-full h-auto object-contain" />
      </div>
      <div className="flex flex-col p-6 h-full overflow-hidden">
        <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>{title}</h3>
        <p className="mt-3 text-gray-700">{description}</p>
        <ul className="mt-auto pt-6 columns-2 gap-x-6 space-y-1">
          {techStack.map((tech) => (
            <li key={tech.name} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: tech.color }} />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
