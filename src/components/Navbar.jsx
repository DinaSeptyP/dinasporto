import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        const offset = -120;
        const top =
          section.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 400);
    } else {
      scrollToSection();
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`navbar flex items-center justify-between md:sticky md:top-0 z-50 px-4 md:px-0 transition-all duration-300 ${
        active
          ? "justify-center text-white pt-0"
          : "md:bg-transparent md:text-white md:shadow-none text-black pt-7"
      }`}
    >
      <div className="logo">
        <h1
          className={`text-3xl font-bold p-1 rounded-lg transition-all duration-300 ${
            active
              ? "bg-white text-black shadow-lg hidden"
              : "md:bg-transparent md:text-white md:shadow-none bg-white text-black"
          }`}
        >
          Dina
        </h1>
      </div>
      <ul
        className={`menu flex sm:gap-10 gap-4 items-center fixed md:static left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 md:top-0 rounded-lg shadow-lg bg-white/30 backdrop-blur-3xl p-4 rounded-br-2xl z-100 ${
          active ? "-top-0 opacity-100" : "-top-10 opacity-0"
        } transition-all duration-300 md:bg-transparent`}
      >
        <li>
          <button
            onClick={() => handleNavClick("home")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("about")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("tool")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Tools
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("project")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("contact")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
