import myImage from "../assets/ProfilePicture.png";

function AboutMePage() {
  return (
    <div className="bg-[#1F2937] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-12">
        {/* Product Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section: About Me Details */}
          <div className="space-y-6">
            {/* About Me Title */}
            <h1 className="text-5xl font-extrabold leading-tight text-white">
              Sai Srikanth Chodimella
            </h1>

            {/* About Me Subtitle */}
            <h2 className="text-2xl font-semibold text-indigo-300">About Me</h2>

            {/* About Me Description */}
            <p className="text-lg text-gray-200 max-w-lg">
              Experienced <strong>.NET Developer</strong> with close to{" "}
              <strong>5 years</strong> of expertise in designing and developing
              scalable, high-quality solutions across{" "}
              <strong>
                Web, Microservices, Mobile, and Desktop applications
              </strong>
              . Skilled in delivering innovative projects following
              industry-standard guidelines and best practices.
            </p>

            {/* Key Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-indigo-300">
                Key Skills:
              </h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Proficient in C#, .NET, and ASP.NET Core.</li>
                <li>Experience with Azure Cloud Services and DevOps.</li>
                <li>Skilled in building RESTful APIs and microservices.</li>
                <li>Strong knowledge of Entity Framework Core and SQL.</li>
              </ul>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
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

          {/* Right Section: Profile Image */}
          <div className="flex justify-center">
            <img
              src={myImage} // Replace with your image path
              alt="Sai Srikanth Chodimella"
              className="w-80 h-96 rounded-lg shadow-2xl border-4 border-indigo-500 object-cover transition-transform transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
