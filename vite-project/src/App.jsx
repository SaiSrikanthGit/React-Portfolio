import React from "react";
import MainLayout from "./MainLayout";

import Header from "./Components/Navbar.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import WorkExperience from "./Pages/WorkExperience.jsx";
import Skills from "./Pages/Skills.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Education from "./Pages/Education.jsx";
import Footer from "./Components/Footer.jsx";
import Timeline from "./Components/Timeline.jsx";
import TechStack from "./Components/TechStack.jsx";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <MainLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          <Navbar />
          <AboutMe />
          <TechStack />
          <Timeline />
          <WorkExperience />
          <Skills />
          <Certifications />
          <Projects />
          <Education />
          <Footer />
        </p>
      </div>
    </MainLayout>
  );
};

export default App;
