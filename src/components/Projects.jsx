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
      highlights: "Conversational AI agent that collects employee data across multiple steps using LangChain agentic workflows",
      link: "https://github.com/bhavana-adarsha/payroll-onboarding-agent",
      status: "live"
    },
    {
      emoji: "🔌",
      title: "Workforce Data Anomaly Explainer AI Agent",
      description: "An AI-powered agent that analyzes workforce scheduling and payroll data, detects anomalies using deterministic logic, and generates plain-language explanations with recommended actions using GPT-4.",
      stack: ["React","Vite","Flask","LangChain" ,"GPT-4", "Synthetic JSON dataset", "Python", "JavaScript"],
      highlights: "Workforce managers dealing with large scheduling datasets spend significant time manually identifying errors — duplicate shifts, availability conflicts, payroll mismatches, and missing submissions. These errors cause overpayments, understaffing, and compliance risks. This agent automates that detection and explains each anomaly in plain language so a non-technical manager can act on it immediately without needing a data analyst.",
      link: "https://github.com/bhavana-adarsha/workforce-anomaly-agent",
      status: "live"
    },
    {
      emoji: "🛡️",
      title: "AI Governance Framework",
      description: "A product-layer framework for LLM output validation, safety guardrails, and reliability protocols for enterprise AI applications.",
      stack: [],
      highlights: "Release readiness framework for a clinical AI chart summarization copilot — Alpha to GA, with safety metrics, pilot design, and governance sign-off checklist",
      link: "https://github.com/bhavana-adarsha/AI-Agent-GTM-Playbook",
      status: "live"
    },
    {
      emoji: "🛡️",
      title: "AI Agent GTM Playbook",
      description: "An AI-powered agent that analyzes workforce scheduling and payroll data, detects anomalies using deterministic logic, and generates plain-language explanations with recommended actions using GPT-4.",
      stack: [],
      highlights: "This playbook defines how to take the Workforce Data Anomaly Explainer Agent from a working prototype to an adopted tool used consistently by workforce managers across an organization. Building the agent is the easy part. Getting people to use it and keep using it is the hard part. This playbook addresses that problem directly. A technically sound agent that managers do not use is not a successful deployment. Adoption is treated as a first-class outcome alongside accuracy and reliability.",
      link: "#",
      status: "live"
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