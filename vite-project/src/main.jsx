import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./Components/Header.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import WorkExperience from "./Pages/WorkExperience.jsx";
import Skills from "./Pages/Skills.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Education from "./Pages/Education.jsx";
import Footer from "./Components/Footer.jsx";
import Timeline from "./Components/Timeline.jsx";
import TechStack from "./Components/TechStack.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <AboutMe />
    <TechStack />
    <Timeline />
    <WorkExperience />
    <Skills />
    <Certifications />
    <Projects />
    <Education />
    <Footer />
  </StrictMode>
);
