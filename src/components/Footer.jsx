import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
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
    <footer className="mt-20 border-t border-zinc-700 bg-zinc-900 text-zinc-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Dina Septy P.</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            aspernatur harum, quasi fugiat tempora obcaecati provident assumenda
            veritatis delectus hic, saepe temporibus impedit. Incidunt facere
            qui beatae deleniti ullam totam? 🌸
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Navigation
          </h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-white transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("tool")}
                href="#tool"
                className="hover:text-white transition-colors"
              >
                Tools
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("project")}
                className="hover:text-white transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-white transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
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
              className="hover:text-gray-100 transition-colors"
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
      <div className="border-t border-zinc-800 text-center py-4 text-sm text-zinc-500">
        © {year} Dina Septy P. — Crafted with ❤️ using React & TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;
