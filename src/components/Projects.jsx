import useScrollAnimation from '../hooks/useScrollAnimation'

function Projects() {
  const ref = useScrollAnimation()

  const projects = [
    {
      emoji: "🧪",
      title: "Clinical Lab Summarizer (RAG)",
      description: "A GPT-4 RAG application that turns raw lab results into structured, plain-language patient summaries grounded in a medical knowledge base. Validated with 15 clinicians and 50 patients.",
      stack: ["GPT-4", "RAG", "FHIR", "Python", "React"],
      highlights: "Product-layer safety guardrails: hedging enforcement, no-diagnostic-claims, and knowledge-base grounding. I defined the evaluation criteria and the constraints that gate a release, not just the build.",
      link: "https://github.com/bhavana-adarsha/iris-lab-analyzer",
      status: "live"
    },
    {
      emoji: "🔍",
      title: "Workforce Anomaly Explainer Agent (ReAct)",
      description: "An agent that analyzes workforce scheduling and payroll data, detects anomalies with deterministic Python logic, and explains each one in plain language with recommended actions using GPT-4.",
      stack: ["React", "Vite", "Flask", "LangChain", "GPT-4", "Python"],
      highlights: "Workforce managers spend significant time manually finding errors that cause overpayments, understaffing, and compliance risk. This agent automates detection and explains each anomaly so a non-technical manager can act immediately, no data analyst required.",
      link: "https://github.com/bhavana-adarsha/workforce-anomaly-agent",
      status: "live"
    },
    {
      emoji: "🤖",
      title: "Payroll & Employee Onboarding Agent",
      description: "A conversational agent that captures employee information and auto-fills multi-step onboarding forms so HR teams can focus on people, not paperwork.",
      stack: ["LangChain", "GPT-4", "Python", "Flask", "React"],
      highlights: "Multi-step conversational data collection with GPT-4 input validation, demonstrating full-stack AI product architecture.",
      link: "https://github.com/bhavana-adarsha/payroll-onboarding-agent",
      status: "live"
    },
    {
      emoji: "🛡️",
      title: "AI Release Readiness Framework",
      description: "A product-layer framework for taking a clinical AI copilot from Alpha to GA: evaluation criteria, exit gates, guardrail design, and governance sign-off.",
      stack: ["Framework"],
      highlights: "Safety metrics, pilot design, human-in-the-loop patterns, and a governance sign-off checklist for a clinical chart-summarization copilot.",
      link: "https://github.com/bhavana-adarsha/Chart-Review-Release-Framework",
      status: "live"
    },
    {
      emoji: "🚀",
      title: "AI Agent GTM Playbook",
      description: "A go-to-market playbook for taking an AI agent from working prototype to adopted tool, with adoption treated as a first-class outcome alongside accuracy and reliability.",
      stack: ["Playbook"],
      highlights: "Building the agent is the easy part. Getting people to keep using it is the hard part. Covers pilot design, champion identification, three-phase rollout, and leading and lagging adoption metrics.",
      link: "https://github.com/bhavana-adarsha/AI-Agent-GTM-Playbook",
      status: "live"
    },
    {
      emoji: "🧭",
      title: "Patient Journey: Test Order to Claims Resolution",
      description: "An end-to-end map of the patient experience from the initial clinical encounter through insurance adjudication and final billing resolution.",
      stack: ["Doc"],
      highlights: "Surfaces the friction points at each stage that represent opportunities for operational improvement and AI-assisted intervention.",
      link: "https://github.com/bhavana-adarsha/Patient_Journey",
      status: "live"
    },
    {
      emoji: "📊",
      title: "Modern Data Stack: Applied Concepts & Tooling Fluency",
      description: "Hands-on engagement with modern data stack tooling and patterns in the context of AI product development.",
      stack: ["Doc"],
      highlights: "How data infrastructure decisions shape LLM product quality, reliability, and observability.",
      link: "https://github.com/bhavana-adarsha/modern_data_stack",
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
                {project.stack.filter(Boolean).map(tech => (
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