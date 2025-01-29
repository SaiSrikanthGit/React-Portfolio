import myImage from "../assets/ProfilePicture.png";

function AboutMePage() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: About Me Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 text-white">
            Sai Srikanth Chodimella
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
            About Me
          </h2>
          <p className="text-lg mb-6 max-w-lg">
            Experienced <strong>.NET Developer</strong> with close to{" "}
            <strong>5 years</strong> of expertise in designing and developing
            scalable, high-quality solutions across{" "}
            <strong>
              Web, Microservices, Mobile, and Desktop applications
            </strong>
            . Skilled in delivering innovative projects following
            industry-standard guidelines and best practices.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              Azure Repo
            </a>
            <a
              href="https://roadmap.sh/r/my-roadmap-as-net-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              My Road Map
            </a>
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section: Profile Photo */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img
            src={myImage}
            alt="Sai Srikanth Chodimella"
            className="w-80 h-96 rounded-lg shadow-2xl border-4 border-indigo-500 object-cover transition-transform transform hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
