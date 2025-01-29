import Siemens from "../assets/Siemens_Healthineers.png";
import Accenture from "../assets/Accenture.png";

function WorkExperience() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600">
            Showcasing my journey through innovation and performance
            optimization
          </p>
        </header>

        <ExperienceCard
          // company="Siemens Healthineers"
          logo={Siemens}
          role="Software Engineer / Work Student"
          duration="Apr 2022 – Sep 2024"
          location="Forchheim, Germany"
          points={[
            "Developed features and modernized WinForms applications in an Agile environment, enhancing performance and user experience.",
            "Built a Digital Twin communication module to simulate real-world systems.",
            "Improved code readability and maintainability by applying SOLID and Clean coding principles.",
            "Integrated MVVM / MVC and various other Design patterns to increase code modularity and scalability.",
            "Resolved critical bugs, improving application stability, and expanding unit test coverage with NUnit and Moq.",
            "Utilized Azure DevOps and Git for CI/CD and version control.",
          ]}
        />

        <ExperienceCard
          // company="Accenture"
          logo={Accenture}
          role="Software Engineer"
          duration="Nov 2018 - Jul 2021"
          location="Hyderabad, India"
          points={[
            "Developed new Web pages for handling vouchers and discount campaigns.",
            "Built Automated reporting solutions to track and share sales figures across multiple retail locations.",
            "Automated repetitive tasks, saving up to 10 hours per week in manual effort.",
            "Designed and implemented secure Web APIs to support functionality for new retail shops.",
            "Rewrote SQL stored procedures and queries to improve performance and readability.",
            "Developed C# components to implement new business logic in a three-tier application, integrating with SQL Server through ADO.NET and Entity Framework.",
            "Enhanced code readability and maintainability by rewriting existing logic using LINQ.",
          ]}
        />
      </div>
    </div>
  );
}

function ExperienceCard({ company, logo, role, duration, location, points }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 mb-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          {logo && <img src={logo} alt={`${company} logo`} className="h-10" />}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">
              {company}
            </h2>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <span className="text-sm text-gray-400">
          {duration} | {location}
        </span>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkExperience;
