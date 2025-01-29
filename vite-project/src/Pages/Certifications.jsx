import Certificate from "../assets/Certification.png";

function Certifications() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-6">
        <img
          src={Certificate}
          alt="Certification Image"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
      <h5 className="text-3xl font-semibold text-gray-800 mb-2">
        Foundational C# with Microsoft
      </h5>
      <p className="text-lg text-gray-600 mb-4">
        Certificate to showcase my skills in C#
      </p>
      <div className="flex justify-center">
        <a
          href="https://www.freecodecamp.org/certification/Sai_Srikanth_Chodimella/foundational-c-sharp-with-microsoft"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          <i className="bi bi-patch-check-fill mr-2"></i>
          View Certificate
        </a>
      </div>
    </div>
  );
}
export default Certifications;
