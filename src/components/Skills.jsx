import useScrollAnimation from '../hooks/useScrollAnimation'

function Skills() {
  const ref = useScrollAnimation()
  const skills = {
    "AI & Agents": ["Agentic AI", "Multi-Agent Systems", "ReAct", "Tool Use / Function Calling", "Autonomy Tiering", "Human-in-the-Loop", "LLM Evaluation", "RAG Architecture", "Prompt Engineering", "Model Validation", "AI Guardrails", "Responsible AI", "LLMOps"],
    "Healthcare Tech": ["FHIR", "HL7", "HIPAA", "EHR Integration", "OpenFDA"],
    "Languages & Frameworks": ["Python", "JavaScript", "ReactJS", "Node.js", "LangChain", "Flask"],
    "Data & Backend": ["SQL", "GraphQL", "REST APIs", "PostgreSQL", "Vector Databases"],
    "Cloud & Tooling": ["AWS", "Lambda", "Docker", "Kubernetes", "Claude Code", "Cursor", "n8n", "Git"],
    "Product & Strategy": ["B2B SaaS", "B2B2C", "0→1 Product Development", "Platform PM", "Roadmapping", "MVP Definition", "OKRs", "Go-to-Market", "Agile"]
  }

  return (
    <section id="skills" ref={ref} className="fade-in">
      <div className="skills-container">
        <h2>I Am Also Good At These</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills