const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FiverrIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.85c0-3.016-2.463-5.267-5.542-5.267v-1.8c4.084 0 7.392 3.157 7.392 7.067zm-3.704 0h-1.85c0-.96-.782-1.743-1.742-1.743v-1.8a3.596 3.596 0 0 1 3.592 3.543zM12.52 6.112c0 .61-.498 1.108-1.108 1.108a1.108 1.108 0 0 1 0-2.216c.61 0 1.108.498 1.108 1.108zM10.927 8.31h1.85v7.194h-1.85V8.31zm-3.344 5.394H5.734l1.898-5.394H5.734l-2.398 6.81v.384h1.904v2.107h1.85v-2.107h1.344v-1.8H7.583zm13.079 0h-1.85v1.8h1.85v-1.8z" />
  </svg>
);

const contacts = [
  {
    icon: <PhoneIcon />,
    label: "Phone",
    display: "(555) 867-5309",
    href: "tel:+15558675309",
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
    display: "linkedin.com/in/lydiabagdon",
    href: "https://linkedin.com/in/lydiabagdon",
  },
  {
    icon: <FiverrIcon />,
    label: "Fiverr",
    display: "fiverr.com/lydiabagdon",
    href: "https://fiverr.com/lydiabagdon",
  },
];

export default function Contact() {
  return (
    <section
      className="bg-[#0D9488] px-6 sm:px-12 lg:px-30 pb-16 flex flex-col items-center gap-4"
      style={{ marginTop: "-60px", paddingTop: "calc(4rem + 60px)" }}
    >
      <h2 className="text-4xl font-extrabold text-white">
        Contact
      </h2>
      <p className="text-lg text-white/80 mb-6">Let's get in touch</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {contacts.map(({ icon, label, display, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-4 bg-white rounded-2xl p-8 shadow-md shadow-teal-900/30 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/40"
          >
            <span style={{ color: "#0D9488" }}>{icon}</span>
            <span className="font-bold text-base" style={{ color: "#0D9488" }}>{label}</span>
            <span className="text-base break-all" style={{ color: "#1E3A5F" }}>{display}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
