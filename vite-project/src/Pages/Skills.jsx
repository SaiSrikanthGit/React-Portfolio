import { useState } from "react";

function SkillsSection() {
  const [openSkill, setOpenSkill] = useState(null);

  const toggleSkill = (index) => {
    setOpenSkill(openSkill === index ? null : index);
  };

  const skillsData = [
    {
      title: "Programming Languages",
      items: ["C#", "SQL", "XAML", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Frameworks",
      items: [".NET 8", ".NET Framework", "Angular (Beginner)"],
    },
    {
      title: ".NET Technologies",
      items: [
        "ASP.NET Core",
        "Entity Framework Core",
        "LINQ",
        "WPF",
        "Windows Forms",
        "MAUI",
        "Blazor",
      ],
    },
    {
      title: "Testing Frameworks",
      items: ["xUnit", "NUnit", "Moq"],
    },
    {
      title: "Development Tools & Libraries",
      items: [
        "Visual Studio",
        "SQL Server Management / Azure Data Studio",
        "CI/CD with Azure DevOps",
        "Azure Cloud Services",
        "Postman",
        "Git",
        "React",
      ],
    },
    {
      title: "Spoken Languages",
      items: ["English (IELTS 7.0 – C1)", "German (Beginner)"],
    },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen py-10">
      <div className="max-w-7xl w-full px-6 md:px-12 mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 text-center mb-10">
          Skills & Expertise
        </h2>

        {/* FAQ-like Skills Accordion */}
        <div className="space-y-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Skill Header */}
              <button
                onClick={() => toggleSkill(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-2xl font-semibold text-teal-300">
                  {skill.title}
                </h3>
                <span className="text-teal-300 text-2xl">
                  {openSkill === index ? "−" : "+"}
                </span>
              </button>

              {/* Skill Content (Collapsible) */}
              {openSkill === index && (
                <div className="p-6 pt-0">
                  <ul className="space-y-2 text-lg text-gray-300">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
