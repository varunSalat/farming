import { PhoneCallIcon } from "lucide-react";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
import { navLinks } from "../constant/constant";

const HomePage = () => {
  return (
    <main className="">
      <section className="relative max-w-[100vw] overflow-hidden p-4">
        <nav className="absolute top-10 flex w-full items-center justify-between px-[3%]">
          <div className="flex items-center gap-12 text-white">
            <Link>
              <img
                className="w-[120px]"
                src="https://agrimo-demo.pbminfotech.com/html-demo/images/logo-white.svg"
              />
            </Link>
            <ul className="flex items-center gap-8">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    className="transition-three-all hover:text-primary text-sm font-medium uppercase"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <PhoneCallIcon className="text-primary" size={32} />
            <div className="text-white">
              <p className="text-sm">Call us Now</p>
              <a href="tel:+917201065314" className="text-md">
                +91 72 0106 5314
              </a>
            </div>
          </div>
        </nav>
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://agrimo-demo.pbminfotech.com/html-demo/images/banner-slider-img/demo01-slide-01.jpg"
            alt="hero-img"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
