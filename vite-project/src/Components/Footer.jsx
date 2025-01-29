import Git from "../assets/Icons/Git.png";
import ReactJS from "../assets/Icons/ReactJS.png";
import TailWind from "../assets/Icons/TailwindCSS.png";
import Gmail from "../assets/Icons/Gmail.png";
import Linkedin from "../assets/Icons/Linkedin.png";

function Footer() {
  return (
    <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* About Section */}
        <div className="text-center mb-10">
          <h5 className="text-2xl font-semibold text-gray-300">
            About This Page
          </h5>
          <p className="mt-2 text-lg text-gray-400 max-w-xl mx-auto">
            Welcome to my portfolio! Built with
            <strong className="text-blue-400">
              {" "}
              .NET 9, Tailwind, ReactJS
            </strong>
            , this site highlights my projects, skills, and expertise. Feel free
            to connect with me for any inquiries.
          </p>
        </div>

        {/* Resource Links Section */}
        <div className="text-center mb-10">
          <h5 className="text-2xl font-semibold text-gray-300">
            Resource Links
          </h5>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
              target="_blank"
              aria-label="Git"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <img src={Git} alt="Git Icon" className="w-10 h-10" />
            </a>
            <a
              href="https://tailwindui.com/"
              target="_blank"
              aria-label="Tailwind"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <img src={TailWind} alt="Tailwind Icon" className="w-10 h-10" />
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              aria-label="ReactJS"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <img src={ReactJS} alt="ReactJS Icon" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-10">
          <h5 className="text-2xl font-semibold text-gray-300">Contact</h5>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="mailto:saisrikanthchodimella@gmail.com"
              target="_blank"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <img src={Gmail} alt="Gmail Icon" className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
              target="_blank"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <img src={Linkedin} alt="LinkedIn Icon" className="w-10 h-10" />
            </a>
          </div>

          <div className="mt-6">
            <figure className="text-gray-400">
              <blockquote className="italic">
                <p>
                  <strong>Email:</strong>
                  <a
                    href="mailto:saisrikanthchodimella@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    saisrikanthchodimella@gmail.com
                  </a>
                </p>
              </blockquote>
              <figcaption className="text-sm mt-2">
                Looking forward to your feedback. Have a great day!
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Sai Srikanth Chodimella. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
