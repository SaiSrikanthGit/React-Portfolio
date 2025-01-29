function SkillsSection() {
  return (
    <div className="bg-gray-800 text-white min-h-screen py-10">
      <div className="max-w-7xl w-full px-6 md:px-12 mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 text-center mb-10">
          Skills & Expertise
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">
              Programming Languages
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>C#</li>
              <li>SQL</li>
              <li>XAML</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">
              Frameworks
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>.NET 8</li>
              <li>.NET Framework</li>
              <li>Angular (Beginner)</li>
            </ul>
          </div>

          {/* .NET Technologies */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">
              .NET Technologies
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>ASP.NET Core</li>
              <li>Entity Framework Core</li>
              <li>LINQ</li>
              <li>WPF</li>
              <li>Windows Forms</li>
              <li>MAUI</li>
              <li>Blazor</li>
            </ul>
          </div>

          {/* Testing Frameworks */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">
              Testing Frameworks
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>xUnit</li>
              <li>NUnit</li>
              <li>Moq</li>
            </ul>
          </div>

          {/* Development Tools & Libraries */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">
              Development Tools & Libraries
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>Visual Studio</li>
              <li>SQL Server Management / Azure Data Studio</li>
              <li>CI/CD with Azure DevOps</li>
              <li>Azure Cloud Services</li>
              <li>Postman</li>
              <li>Git</li>
              <li>React</li>
            </ul>
          </div>

          {/* Spoken Languages */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">
              Spoken Languages
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>English (IELTS 7.0 – C1)</li>
              <li>German (Beginner)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
