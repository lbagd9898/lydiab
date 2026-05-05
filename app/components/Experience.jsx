import Image from "next/image";

export default function Experience({ position, company, dates, description, imageLeft }) {
  const image = (
    <div className="relative w-full h-64">
      <Image
        src="/dogbook-dash.png"
        alt={position}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );

  const text = (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-2xl font-extrabold" style={{ color: "#0D9488" }}>{position}</h1>
      <h2 className="text-lg font-bold">{company}</h2>
      <p className="italic text-sm">{dates}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div
      className="flex flex-row gap-8 items-center w-full rounded-2xl p-6 bg-white shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300"
    >
      {imageLeft ? image : text}
      {imageLeft ? text : image}
    </div>
  );
}
