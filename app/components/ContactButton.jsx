export default function ContactButton({ text }) {
  return (
    <a
      href="#contact"
      className="relative inline-flex items-center gap-4 bg-white border-2 border-[#1E3A5F] px-8 py-4 font-bold text-[#1E3A5F] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
      style={{ boxShadow: "6px 6px 4px rgba(0,0,0,0.15)" }}
    >
      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#1E3A5F]" />
      <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#1E3A5F]" />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#1E3A5F]" />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#1E3A5F]" />
      <span className="text-lg">↓</span>
      <span>{text}</span>
      <span className="text-lg">↓</span>
    </a>
  );
}
