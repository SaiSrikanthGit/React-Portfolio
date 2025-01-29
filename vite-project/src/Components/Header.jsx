function Header() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Portfolio Tag on the Left */}
        <a
          href="#top"
          className="text-white text-2xl font-bold tracking-wide flex items-center space-x-2"
        >
          <span>My Portfolio</span>
        </a>

        {/* Desktop Menu on the Right */}
        <ul className="hidden sm:flex space-x-8 text-white font-medium">
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
        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Menu Toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
