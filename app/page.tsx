import About from "./components/About";
import Webdev from "./components/Webdev";
import Tutoring from "./components/Tutoring";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans">
      <About />
      <Webdev />
      <Tutoring />
      <Contact />
    </main>
  );
}
