import About from "./components/About";
import Webdev from "./components/Webdev";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans">
      <About />
      <Webdev />
    </main>
  );
}
