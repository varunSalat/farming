import { Link } from "react-router-dom";
import { navLinks } from "../../constant/constant";
import { PhoneCallIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="absolute top-10 z-10 flex w-full items-center justify-between px-[3%]">
      <div className="flex items-center gap-12 text-white">
        <Link>
          <img
            className="w-[120px]"
            src="https://apexriminternational.com/assets/logo_without_bg.png"
          />
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                className="text-sm font-medium uppercase transition-three-all hover:text-primary"
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
  );
};

export default Navbar;
