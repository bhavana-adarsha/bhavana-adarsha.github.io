import useScrollAnimation from '../hooks/useScrollAnimation'

function Projects() {
  const ref = useScrollAnimation()

  const projects = [
    {
      emoji: "🌸",
      title: "IRIS — AI Product Development & Workflow Design",
      description: "An AI-powered platform built to validate LLM workflow design, prompt engineering strategies, and output validation protocols at the product layer.",
      stack: ["LLM APIs", "RAG", "Python", "ReactJS"],
      highlights: "AI workflow requirements, output validation protocols, safety guardrails",
      link: "https://github.com/bhavana-adarsha/iris-lab-analyzer",
      status: "live"
    },
    {
      emoji: "🤖",
      title: "Agentic AI — Payroll & Employee Onboarding Agent",
      description: "An intelligent agent that connects to payroll systems, captures employee information, and auto-fills onboarding forms so HR teams can focus on people, not paperwork.",
      stack: ["LangChain", "Agentic AI", "REST APIs", "Python"],
      highlights: null,
      link: "https://github.com/bhavana-adarsha/payroll-onboarding-agent",
      status: "coming"
    },
    {
      emoji: "🔌",
      title: "AI & API Integration Framework",
      description: "A documented product framework for designing, validating, and governing AI-powered API integrations across workforce and operations platforms.",
      stack: ["REST APIs", "Python", "LLM APIs"],
      highlights: null,
      link: "#",
      status: "coming"
    },
    {
      emoji: "🛡️",
      title: "AI Governance Framework",
      description: "A product-layer framework for LLM output validation, safety guardrails, and reliability protocols for enterprise AI applications.",
      stack: ["LLM APIs", "Python"],
      highlights: null,
      link: "#",
      status: "coming"
    }
  ]

  return (
    <section id="projects" ref={ref} className="fade-in">
      <div className="projects-container">
        <h2>🌟 A Few Featured Projects</h2>
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