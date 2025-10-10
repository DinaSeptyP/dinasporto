import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 transition-colors duration-300 px-4">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Dina Septy P.</h2>
          <p className="text-sm leading-relaxed">
            Built with curiosity, care, and way too much rock music. Thanks for
            stopping by, I hope something here made you smile!! 🌻🌸
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Navigation</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("tool")}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                Tools
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("project")}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/dina-septy-puspayani/"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="ri-linkedin-box-fill text-3xl"></i>
            </a>
            <a
              href="https://github.com/DinaSeptyP"
              target="_blank"
              className="hover:text-gray-700 dark:hover:text-gray-100 transition-colors"
            >
              <i className="ri-github-fill text-3xl"></i>
            </a>
            <a
              href="mailto:dinaseptypuspayani87@gmail.com"
              className="hover:text-rose-400 transition-colors"
            >
              <i className="ri-mail-fill text-3xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-zinc-300 dark:border-zinc-800 text-center py-4 text-sm text-zinc-700 dark:text-zinc-500">
        © {year} Dina Septy Puspayani — Crafted with ❤️ using React &
        TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;
