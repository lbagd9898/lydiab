export default function Education({ school, degree, years }) {
  return (
    <div className="p-4 sm:p-6 flex flex-col gap-1 bg-white shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300">
      <h3 className="text-xl sm:text-2xl font-extrabold" style={{ color: "#1E3A5F" }}>
        {school}
      </h3>
      <p className="text-base sm:text-lg font-bold">{degree}</p>
      <p className="italic text-sm">{years}</p>
    </div>
  );
}
