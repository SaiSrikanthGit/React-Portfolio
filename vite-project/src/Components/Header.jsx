import myImage from "../assets/ProfilePicture.png";

function Header() {
  return (
    <div className="relative">
      {/* Overlapping Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 sticky top-0 z-50 shadow-xl h-20 flex items-center px-6 sm:px-8 lg:px-12">
        {/* Portfolio Brand Logo and Name */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo
            alt="Portfolio Logo"
            className="w-10 h-10 rounded-full"
          />
          <a
            href="#top"
            className="text-white text-2xl font-bold tracking-wide"
          >
            My Portfolio
          </a>
        </div>

        {/* Desktop Menu on the Right */}
        <ul className="hidden sm:flex space-x-8 text-white font-medium ml-8">
          <li>
            <a
              href="#AboutMe"
              className="hover:text-indigo-200 transition-colors duration-300 transform hover:scale-105"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#WorkExperience"
              className="hover:text-indigo-200 transition-colors duration-300 transform hover:scale-105"
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-indigo-200 transition-colors duration-300 transform hover:scale-105"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Certifications"
              className="hover:text-indigo-200 transition-colors duration-300 transform hover:scale-105"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:text-indigo-200 transition-colors duration-300 transform hover:scale-105"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Education"
              className="hover:text-indigo-200 transition-colors duration-300 transform hover:scale-105"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#Footer"
              className="hover:text-indigo-200 transition-colors duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden ml-auto">
          <button
            className="text-white focus:outline-none"
            aria-label="Menu Toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
