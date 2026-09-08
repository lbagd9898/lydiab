import About from "./components/About";
import Webdev from "./components/Webdev";
import Tutoring from "./components/Tutoring";
import Contact from "./components/Contact";
import IntroAnimation from "./components/IntroAnimation";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans">
      <IntroAnimation />
      <About />
      <Tutoring />
      <Webdev />
      <Contact />
    </main>
  );
}
