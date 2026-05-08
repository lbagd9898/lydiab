const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const contacts = [
  {
    icon: <PhoneIcon />,
    label: "Phone",
    display: "(518) 925-2596",
    href: "tel:+15189252596",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    display: "lydia.bagdon@gmail.com",
    href: "mailto:lydia.bagdon@gmail.com",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    display: "Lydia Bagdon",
    href: "https://www.linkedin.com/in/lydia-bagdon-3057a62a2",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    display: "github.com/lbagd9898",
    href: "https://github.com/lbagd9898",
  },
];

import TypewriterHeading from "./TypewriterHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0D9488] px-6 sm:px-12 lg:px-30 pb-16 flex flex-col items-center gap-4"
      style={{ marginTop: "-60px", paddingTop: "calc(4rem + 60px)" }}
    >
      <TypewriterHeading
        chars={7}
        className="text-4xl font-extrabold text-center"
        style={{ color: "white", borderRightColor: "white" }}
      >
        Contact
      </TypewriterHeading>
      <p className="text-lg text-white/80 mb-6">Let's get in touch</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {contacts.map(({ icon, label, display, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="relative flex flex-col items-center gap-4 bg-white p-8 shadow-md shadow-teal-900/30 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-900/40"
          >
            <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#0D9488]" />
            <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#0D9488]" />
            <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#0D9488]" />
            <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#0D9488]" />
            <span style={{ color: "#0D9488" }}>{icon}</span>
            <span className="font-bold text-base" style={{ color: "#0D9488" }}>
              {label}
            </span>
            <span className="text-base break-all" style={{ color: "#1E3A5F" }}>
              {display}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
