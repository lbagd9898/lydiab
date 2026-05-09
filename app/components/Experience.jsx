export default function Experience({ position, company, dates, description, imageLeft }) {
  return (
    <div className="relative w-full p-4 sm:p-6 bg-white shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300">
      {imageLeft
        ? <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#1E3A5F]" />
        : <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#1E3A5F]" />
      }
      <div className="flex flex-col gap-2">
        <h3 className="text-xl sm:text-2xl font-extrabold" style={{ color: "#1E3A5F" }}>{position}</h3>
        <p className="text-base sm:text-lg font-bold">{company}</p>
        <p className="italic text-sm">{dates}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
