import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  );
}
