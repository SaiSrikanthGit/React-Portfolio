function TimelineDashboard() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-10 overflow-x-auto">
        {/* Dashboard Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Timeline
        </h2>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-300 transform -translate-y-1/2"></div>

          {/* Timeline Items */}
          <div className="flex space-x-8 pb-8">
            {/* Timeline Item 1 */}
            <div className="flex flex-col items-center w-64">
              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transform transition-transform hover:scale-105">
                <h5 className="text-xl font-semibold text-blue-600">
                  July 2014 Beginning of First Academic Degree
                </h5>
                <p className="text-gray-600 mt-2">
                  Started my Bachelor's Degree in Electronics and Communication
                  Engineering
                </p>
                <span className="text-sm text-gray-500">Aug 2021</span>
              </div>
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                <i className="bi bi-building text-xl"></i>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-col items-center w-64 mt-24">
              {/* Icon */}
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
                <i className="bi bi-cash-coin text-xl"></i>
              </div>
              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mt-4 transform transition-transform hover:scale-105">
                <h5 className="text-xl font-semibold text-green-600">
                  May 2018 Completed My Bachelor's Degree
                </h5>
                <p className="text-gray-600 mt-2">
                  Graduated with a CGPA of 7.03
                </p>
                <span className="text-sm text-gray-500">Dec 2021</span>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-col items-center w-64">
              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transform transition-transform hover:scale-105">
                <h5 className="text-xl font-semibold text-purple-600">
                  Nov 2018 Journey at Accenture
                </h5>
                <p className="text-gray-600 mt-2">
                  Joined Accenture as an Associate Software Engineer
                </p>
                <span className="text-sm text-gray-500">Feb 2022</span>
              </div>
              {/* Icon */}
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg">
                <i className="bi bi-rocket text-xl"></i>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex flex-col items-center w-64 mt-24">
              {/* Icon */}
              <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <i className="bi bi-globe text-xl"></i>
              </div>
              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mt-4 transform transition-transform hover:scale-105">
                <h5 className="text-xl font-semibold text-yellow-600">
                  Sept 2021 Pursuing Master's Degree
                </h5>
                <p className="text-gray-600 mt-2">
                  Enrolled in FAU's Artificial Intelligence program
                </p>
                <span className="text-sm text-gray-500">Dec 2022</span>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="flex flex-col items-center w-64">
              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transform transition-transform hover:scale-105">
                <h5 className="text-xl font-semibold text-red-600">
                  Apr 2022 Continuation of Professional Journey
                </h5>
                <p className="text-gray-600 mt-2">
                  Joined Siemens Healthineers as a Working Student/Software
                  Engineer
                </p>
                <span className="text-sm text-gray-500">Mar 2023</span>
              </div>
              {/* Icon */}
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
                <i className="bi bi-people text-xl"></i>
              </div>
            </div>

            {/* Timeline Item 6 */}
            <div className="flex flex-col items-center w-64 mt-24">
              {/* Icon */}
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg">
                <i className="bi bi-award text-xl"></i>
              </div>
              {/* Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mt-4 transform transition-transform hover:scale-105">
                <h5 className="text-xl font-semibold text-pink-600">
                  Present Adding New Milestone
                </h5>
                <p className="text-gray-600 mt-2">
                  Looking for opportunities to improve my skills and contribute
                  to an organization
                </p>
                <span className="text-sm text-gray-500">Oct 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineDashboard;
