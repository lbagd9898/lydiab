export default function Project({
  image,
  title,
  description,
  techStack,
  imageLeft = true,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative grid grid-cols-2 shadow-md shadow-gray-300 bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-400 cursor-pointer">
      {imageLeft
        ? <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#1E3A5F]" />
        : <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#1E3A5F]" />
      }
      <div
        className={`flex items-center justify-center bg-gray-50 p-6 h-[307px] overflow-hidden ${
          imageLeft ? "order-1" : "order-2"
        }`}
      >
        <img src={image} alt={title} className="w-full h-auto object-contain" />
      </div>
      <div
        className={`flex flex-col p-8 h-full overflow-hidden ${
          imageLeft ? "order-2" : "order-1"
        }`}
      >
        <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
          {title}
        </h3>
        <p className="mt-3 text-gray-700">{description}</p>
        <ul className="mt-auto pt-6 columns-2 gap-x-6 space-y-1">
          {techStack.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
