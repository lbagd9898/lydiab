import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-gray-100 px-6 sm:px-12 lg:px-30 py-4 flex justify-center sm:justify-between items-center font-bold"
      style={{ color: "#1E3A5F" }}
    >
      <Link href="/" className="hidden sm:block">lydia bagdon</Link>
      <div className="flex gap-6">
        <Link href="/#webdev" className="nav-link">
          Websites
        </Link>
        <Link href="/#tutoring" className="nav-link">
          Tutoring
        </Link>
        <Link href="/#contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
