import crwnImage from '../assets/image.png'

const Projects = () => {
  const projects = [
    {
      title: "Crwn Clothing",
      description: "Built a full-stack e-commerce application using React.js, Firebase Authentication, and Cloud Firestore, implementing secure user authentication and real-time product inventory management.",
      image: crwnImage,
      tools: ["React", "Firebase", "Cloud Firestore", "CSS-SCSS", "Browser-Router", "useContext"],
      githubLink: "https://github.com/MDelarosa1993/crwn-clothing-capstone",
      keyFeatures: [
        "User authentication system",
        "Shopping cart functionality",
        "Real-time inventory updates",
        "Product categorization"
      ]
    },
    {
      title: "Viewing Party API",
      description: "Built a social platform for organizing movie viewing parties with friends, enabling users to invite others, schedule sessions, and access real-time movie details.",
      image: "",
      tools: ["Ruby on Rails", "Bcrypt", "RSpec", "Movie Database API"],
      githubLink: "https://github.com/MDelarosa1993/viewing-party-api-Mod3",
      keyFeatures: [
        "User authentication system",
        "Full-CRUD",
        "Custom Validations, checks for movie runtime and event duration",
        "Integrated with an external movie API for dynamic data retrieval and seamless user experience"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-gray-600 mb-4">Features: {project.keyFeatures.map((feature, idx) => (
                  <p key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                    {feature}
                  </p>
                ))}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                     className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
                    View Code
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                       className="px-4 py-2 border border-primary text-primary rounded hover:bg-gray-50 transition-colors">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;