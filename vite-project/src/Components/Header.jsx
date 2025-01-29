function Header() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-indigo-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#top"
          className="text-white text-2xl font-bold tracking-wide flex items-center space-x-2"
        >
          <span>My Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-white font-medium">
          <li>
            <a
              href="#AboutMe"
              className="hover:text-indigo-200 transition-colors duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#WorkExperience"
              className="hover:text-indigo-200 transition-colors duration-300"
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-indigo-200 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Certifications"
              className="hover:text-indigo-200 transition-colors duration-300"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:text-indigo-200 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Education"
              className="hover:text-indigo-200 transition-colors duration-300"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#Footer"
              className="hover:text-indigo-200 transition-colors duration-300"
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
