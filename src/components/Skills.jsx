import useScrollAnimation from '../hooks/useScrollAnimation'

function Skills() {
  const skills = {
    "AI & ML": ["Agentic AI", "LLM Integration", "Prompt Engineering", "RAG Architecture", "LangChain", "Model Validation"],
    "Healthcare Tech": ["FHIR APIs", "HL7", "HIPAA Compliance", "EHR Integration", "OpenFDA"],
    "Languages & Frameworks": ["Python", "JavaScript", "ReactJS", "Node.js", "HTML/CSS"],
    "Data & Backend": ["SQL", "REST APIs", "PostgreSQL", "Vector Databases"],
    "Cloud & DevOps": ["AWS", "GitHub", "Docker"],
    "Product & Strategy": ["B2B SaaS", "B2B2C", "0→1 Product Development", "Roadmapping", "OKRs", "Agile/Scrum"]
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