import Certificate from "../assets/Certification.png";

function Certifications() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Certificate Image */}
          <div className="flex justify-center">
            <img
              src={Certificate}
              alt="Certification Image"
              className="w-full max-w-md rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Certification Title */}
            <h2 className="text-4xl font-bold text-gray-900">
              Foundational C# with Microsoft
            </h2>

            {/* Certification Description */}
            <p className="text-lg text-gray-600">
              This certification showcases my skills in C#, highlighting my
              proficiency and dedication to mastering the language. It is a
              testament to mt ability to develop robust and scalable
              applications using C# and the .NET ecosystem.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Key Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Validates foundational knowledge of C# programming.</li>
                <li>Recognized by industry professionals and employers.</li>
                <li>Demonstrates commitment to continuous learning.</li>
              </ul>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-8">
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
        </div>
      </div>
    </section>
  );
}

export default Certifications;
