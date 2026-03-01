import useScrollAnimation from '../hooks/useScrollAnimation'

function Projects() {
  const ref = useScrollAnimation();
  const projects = [
    {
      emoji: "🌸",
      title: "IRIS — AI-Powered Women's Health Platform",
      description: "An intelligent health platform that analyzes lab results, delivers personalized health nudges, and puts women in the driver's seat of their own health data.",
      stack: ["GPT-4", "RAG", "FHIR", "Python", "ReactJS"],
      highlights: "Lab result interpretation, HIPAA-compliant architecture, personalized AI recommendations",
      link: "https://github.com/bhavana-adarsha/iris-lab-analyzer",
      status: "live"
    },
    {
      emoji: "🤖",
      title: "Agentic AI — Payroll Employee Onboarding Agent",
      description: "An intelligent agent that connects to payroll systems, captures employee information, and auto-fills onboarding forms — so HR teams can stop doing what a robot should be doing.",
      stack: ["LangChain", "Agentic AI", "REST APIs", "Python"],
      highlights: null,
      link: "#",
      status: "coming"
    },
    {
      emoji: "📋",
      title: "Agentic AI — Patient Summary Generator",
      description: "An AI agent that pulls clinical data and generates concise, structured patient summaries for care teams — reducing cognitive load and improving handoff quality.",
      stack: ["GPT-4", "FHIR APIs", "LangChain", "Python"],
      highlights: null,
      link: "#",
      status: "coming"
    }
  ]

  return (
    <section id="projects" ref={ref} className="fade-in">
      <div className="projects-container">
        <h2>🌟 Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-header">
                <span className="project-emoji">{project.emoji}</span>
                {project.status === "coming" && (
                  <span className="coming-soon">🔨 In Progress</span>
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.highlights && (
                <p className="project-highlights">✨ {project.highlights}</p>
              )}
              <div className="project-stack">
                {project.stack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.status === "live" && (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects