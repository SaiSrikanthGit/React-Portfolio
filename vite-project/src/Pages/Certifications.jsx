import Certificate from "../assets/Certification.png";

function Certifications() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <div className="text-center mb-8">
          <img
            src={Certificate}
            alt="Certification Image"
            className="mx-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          />
        </div>
        <h5 className="text-4xl font-semibold text-gray-800 mb-3 tracking-wide">
          Foundational C# with Microsoft
        </h5>
        <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto">
          Showcase your skills in C# with this certification, highlighting your
          proficiency and dedication to mastering the language.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.freecodecamp.org/certification/Sai_Srikanth_Chodimella/foundational-c-sharp-with-microsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl transition duration-300 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            <i className="bi bi-patch-check-fill mr-2 text-lg"></i>
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
