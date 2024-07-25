import "react-awesome-slider/dist/styles.css";

import Navbar from "../components/general/Navbar";
import HeroSection from "../components/homepage/HeroSection";
import HeroWwoSection from "../components/homepage/HeroWwoSection";
import { TractorIcon } from "lucide-react";

const HomePage = () => {
  return (
    <main className="">
      <section className="relative h-screen max-w-[100vw] overflow-hidden p-4">
        <Navbar />
        <HeroSection />
      </section>
      {/* What we offer section */}
      <HeroWwoSection />
    </main>
  );
};

export default HomePage;
