import FAU from "../assets/FAULogo.png";
import GITAM from "../assets/GitamLogo.jpg";

function Education() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Education
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FAU University Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              {/* University Logo */}
              <img src={FAU} alt="FAU Logo" />

              {/* University Name */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                FAU University
              </h3>

              {/* University Details */}
              <p className="text-gray-600 mb-4">
                <strong>Sept 2021 - Present</strong>
                <br />
                Erlangen, Germany
                <br />
                Artificial Intelligence
                <br />
                Master's degree
              </p>

              {/* University Link */}
              <a
                href="https://www.fau.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                University Link
              </a>
            </div>
          </div>

          {/* GITAM University Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              {/* University Logo */}
              <img src={GITAM} alt="GITAM University Logo" />

              {/* University Name */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                GITAM University
              </h3>

              {/* University Details */}
              <p className="text-gray-600 mb-4">
                <strong>Jul 2014 - May 2018</strong>
                <br />
                Visakhapatnam, India
                <br />
                Electronics and Communications Engineering
                <br />
                Bachelor's degree
                <br />
                <strong>CGPA 7.03</strong>
              </p>

              {/* University Link */}
              <a
                href="https://www.gitam.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                University Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
