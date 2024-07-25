import { Navbar } from "../components/general";
import {
  HeroSection,
  HeroOurServicesSection,
  HeroWhatWeSell,
  HeroWwoSection,
  WhoWeAreSection,
} from "../components/homepage";

const HomePage = () => {
  return (
    <main className="">
      <section className="relative h-screen min-h-[600px] max-w-[100vw] overflow-hidden p-4">
        <Navbar />
        <HeroSection />
      </section>
      {/* What we offer section */}
      <HeroWwoSection />
      {/* Who We Are */}
      <WhoWeAreSection />
      {/* What we sell marque effect */}
      <HeroWhatWeSell />
      {/* OUR SERVICES */}
      <HeroOurServicesSection />
    </main>
  );
};

export default HomePage;
