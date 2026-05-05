export default function Education({ school, degree, years }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-1 bg-white shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300"
    >
      <h1 className="text-2xl font-extrabold" style={{ color: "#0D9488" }}>{school}</h1>
      <h2 className="text-lg font-bold">{degree}</h2>
      <p className="italic text-sm">{years}</p>
    </div>
  );
}
