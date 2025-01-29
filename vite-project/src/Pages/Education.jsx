import FAU from "../assets/FAULogo.png";
import GITAM from "../assets/GitamLogo.jpg";

function Education() {
  return (
    <div className="space-y-12 px-6 py-12 max-w-4xl mx-auto">
      {/* FAU University Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        <img
          src={FAU}
          alt="FAU Logo"
          className="w-24 h-24 object-contain rounded-full border-2 border-gray-300"
        />
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold text-gray-800">
            FAU University
          </h5>
          <p className="text-gray-600">
            <strong>Sept 2021 - Present</strong>
            <br />
            Erlangen, Germany
            <br />
            Artificial Intelligence
            <br />
            Master's degree
          </p>
          <a
            href="https://www.fau.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
          >
            University Link
          </a>
        </div>
      </div>

      {/* GITAM University Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        <img
          src={GITAM}
          alt="GITAM University Logo"
          className="w-24 h-24 object-contain rounded-full border-2 border-gray-300"
        />
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold text-gray-800">
            GITAM University
          </h5>
          <p className="text-gray-600">
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
          <a
            href="https://www.gitam.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
          >
            University Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
