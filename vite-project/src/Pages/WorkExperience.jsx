function WorkExperience() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600">
            Showcasing my journey through innovation and performance
            optimization
          </p>
        </header>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-600">
                Siemens Healthineers
              </h2>
              <p className="text-sm text-gray-500">
                Software Engineer / Work Student
              </p>
            </div>
            <span className="text-sm text-gray-400">
              Apr 2022 – Sep 2024 | Forchheim, Germany
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Developed features and modernized WinForms application in an Agile
              environment, enhancing performance and user experience.
            </li>
            <li>
              Built a Digital Twin communication module to simulate real-world
              systems.
            </li>
            <li>
              Improved code readability and maintainability by applying SOLID
              and Clean coding principles.
            </li>
            <li>
              Integrated MVVM / MVC and various other Design patterns to
              increase code modularity and scalability.
            </li>
            <li>
              Resolved critical bugs, improving application stability, and
              expanding unit test coverage with NUnit and Moq.
            </li>
            <li>
              Utilized Azure DevOps and Git for CI/CD and version control.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-600">
                Accenture
              </h2>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
            <span className="text-sm text-gray-400">
              Nov 2018 - Jul 2021 | Hyderabad, India
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Developed new Web pages for handling vouchers and discount
              campaigns.
            </li>
            <li>
              Built Automated reporting solutions to track and share sales
              figures across multiple retail locations.
            </li>
            <li>
              Automated repetitive tasks, saving up to 10 hours per week in
              manual effort.
            </li>
            <li>
              Designed and implemented secure Web APIs to support functionality
              for new retail shops.
            </li>
            <li>
              Rewrote SQL stored procedures and queries to improve performance
              and readability.
            </li>
            <li>
              Developed C# components to implement new business logic in a
              three-tier application, integrating with SQL Server through
              ADO.NET and Entity Framework.
            </li>
            <li>
              Enhanced code readability and maintainability by rewriting
              existing logic using LINQ.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
