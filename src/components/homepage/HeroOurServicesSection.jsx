import { ArrowUpRight, Tractor } from "lucide-react";
import { SmallHeader } from "../general";

const HeroOurServicesSection = () => {
  return (
    <section className="relative my-16 min-h-[600px] bg-secondary px-4 py-8">
      <div className="mx-auto max-w-[1400px]">
        <div>
          <SmallHeader text="Our Services" />
          <h1 className="mt-2 text-4xl font-medium text-white">
            What We Offer
          </h1>
        </div>
        <img
          src="https://agrimo-demo.pbminfotech.com/html-demo/images/homepage-1/bg/staticbox-bg-img.png"
          className="absolute bottom-0 left-0 w-full"
          alt="grass"
        />

        {/* SERVICES LIST */}
        <div className="mt-6">
          <div
            // key={i}
            className="curv group relative w-[min(460px,100%)] cursor-pointer justify-between rounded-xl p-6 px-8 transition-three-all before:shadow-sm hover:-translate-y-3"
          >
            <div className="flex items-center gap-4 border-b border-black-5 pb-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-black">
                <Tractor />
              </div>
              <h2 className="text-2xl font-medium">{"wwo.name"}</h2>
            </div>
            <p className="mt-4 max-w-[360px] text-black-3">{"wwo.dis"}</p>
            <div className="absolute -bottom-2 right-2 grid h-12 w-12 place-items-center rounded-full bg-white text-black-3 transition-three-all group-hover:bg-secondary group-hover:text-white">
              <ArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOurServicesSection;
