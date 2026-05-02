import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-gray-100 px-6 sm:px-12 lg:px-30 py-4 flex justify-between items-center font-bold"
      style={{ color: "#1E3A5F" }}
    >
      <div>lydia bagdon</div>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
