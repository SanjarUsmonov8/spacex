import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mars from "./components/Mars";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Navbar/>
        <Hero/>
        <Mars/>
        <Footer/>
      </div>
    </div>
  );
}
