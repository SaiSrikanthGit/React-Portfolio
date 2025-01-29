import React from "react";
import myImage from "../assets/ProfilePicture.png";

function AboutMePage() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 md:flex md:items-center md:justify-between">
        {/* Left Section: About Me Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Sai Srikanth Chodimella
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            <strong>About Me</strong>
          </h2>
          <p className="text-lg mb-6">
            Experienced <strong>.NET Developer</strong> with close to{" "}
            <strong>5 years</strong> of expertise in designing and developing
            scalable, high-quality solutions across{" "}
            <strong>
              Web, Microservices, Mobile, and Desktop applications
            </strong>
            . Skilled in delivering innovative projects following industry-
            standard guidelines and best practices.
          </p>

          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-teal-200 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-teal-200 transition duration-300"
            >
              Azure Repo
            </a>
            <a
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              className="text-lg font-semibold hover:text-teal-200 transition duration-300 cursor-pointer"
            >
              My Timeline
            </a>
            <a
              href="https://roadmap.sh/r/my-roadmap-as-net-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-teal-200 transition duration-300"
            >
              My Road Map
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={myImage}
            alt="Sai Srikanth Chodimella"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
