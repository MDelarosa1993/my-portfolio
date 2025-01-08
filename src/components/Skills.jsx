const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3/SCSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Jest", level: "Intermediate"},
        { name: "Cypress", level: "Intermediate"}
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Ruby on Rails", level: "Adanced" },
        { name: "Postgresql", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Redis", level: "Intermediate" },
        { name: "Sidkiq", level: "Intermediate" },
        { name: "Active jobs", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Object-Oriented-Programming(OOP)", level: "Advanced"},
        { name: "Test-Driven-Development(TDD)", level: "Advanced"},
        { name: "JSON", level: "Advanced"}
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-medium text-gray-800">{skill.name}</p>
                    {skill.level && <p className="text-sm text-gray-500 mt-1">{skill.level}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills;