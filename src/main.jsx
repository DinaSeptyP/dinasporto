import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer.jsx";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="container mx-auto px-4">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
