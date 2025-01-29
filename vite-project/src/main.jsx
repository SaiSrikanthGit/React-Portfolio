import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutMe from "./Pages/AboutMe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AboutMe />
  </StrictMode>
);
