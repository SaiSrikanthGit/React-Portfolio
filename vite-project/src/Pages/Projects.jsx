import Monsters from "../assets/Project.png";
import UnderGoing from "../assets/Under_Construction.png";

function Projects() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="space-y-8">
        {/* First Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={Monsters}
            alt="Project Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <figure>
              <blockquote className="text-xl font-semibold text-gray-800">
                <p>Project Monster Builder</p>
              </blockquote>
              <figcaption className="text-sm text-gray-600 mt-2">
                Currently Optimizing application performance and Testing new UI
                Component Libraries
              </figcaption>
            </figure>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <i className="text-indigo-600">•</i>
                <p>
                  Developed <strong>RESTful API</strong> for backend and a{" "}
                  <strong>Blazor</strong> web app with{" "}
                  <strong>Bootstrap</strong> for frontend UI/UX
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <i className="text-indigo-600">•</i>
                <p>
                  Built APIs with <strong>ASP.NET Core Minimal API</strong>
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <i className="text-indigo-600">•</i>
                <p>
                  Implemented <strong>Unit</strong> and{" "}
                  <strong>Integration</strong> tests using{" "}
                  <strong>xUnit</strong> and <strong>Moq</strong>
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <i className="text-indigo-600">•</i>
                <p>
                  Integrated <strong>OAuth 2.0</strong> and{" "}
                  <strong>OpenID</strong> for Authentication/Authorization
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <i className="text-indigo-600">•</i>
                <p>
                  Used <strong>Entity Framework Core</strong> for{" "}
                  <strong>Azure SQL Database</strong>
                </p>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition duration-300"
              >
                Project Repo Link
              </a>
              <a
                href="https://monsterbuildermanager.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center py-2 px-4 text-white bg-green-600 hover:bg-green-700 rounded-md text-sm font-medium transition duration-300"
              >
                Monster Builder Page
              </a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={UnderGoing}
            alt="Under Construction"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <figure>
              <blockquote className="text-xl font-semibold text-gray-800">
                <p>New Project Coming Soon</p>
              </blockquote>
              <figcaption className="text-sm text-gray-600 mt-2">
                Currently in Development Phase
              </figcaption>
            </figure>
            <div className="mt-4">
              <h5 className="text-lg font-semibold text-gray-700 mb-2">
                Stay tuned for updates!
              </h5>
              <p className="text-gray-600">
                <span className="block mb-1">
                  Exciting new features on the way.
                </span>
                <span className="block mb-1">
                  Optimizing current development processes.
                </span>
                <span className="block mb-1">
                  New UI/UX features being designed.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
