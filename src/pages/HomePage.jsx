import { Navbar } from "../components/general";
import {
  HeroSection,
  HeroOurServicesSection,
  HeroWhatWeSell,
  HeroWwoSection,
  WhoWeAreSection,
  GrowNaturallySection,
  TestimonialsSection,
  HealthyLifeSection,
  OurCertificatesSection,
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
      {/* Grow Naturally */}
      <GrowNaturallySection />
      {/* Testimonial Section */}
      <TestimonialsSection />
      {/* Healthy Life */}
      <HealthyLifeSection />
      {/* Our Certificates */}
      <OurCertificatesSection />
    </main>
  );
};

export default HomePage;
