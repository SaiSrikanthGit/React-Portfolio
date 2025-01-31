import { useState } from "react";

export default () => {
  const [state, setState] = useState(false);

  // Navigation links with hrefs for smooth scrolling
  const navigation = [
    { title: "About Me", path: "#about-me" },
    { title: "Work Experience", path: "#work-experience" },
    { title: "Skills", path: "#skills" },
    { title: "Certifications", path: "#certifications" },
    { title: "Projects", path: "#projects" },
    { title: "Education", path: "#education" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none shadow-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* Professional Logo */}
          <a href="#">
            <img
              src="https://placehold.co/120x50?text=My+Logo" // Replace with your professional logo
              width={120}
              height={50}
              alt="Professional Logo"
              className="h-10"
            />
          </a>
          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Navigation Links */}
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <a
                    href={item.path}
                    className="block transition duration-300 ease-in-out"
                    onClick={() => setState(false)} // Close the menu on mobile after clicking a link
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
