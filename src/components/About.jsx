import useScrollAnimation from '../hooks/useScrollAnimation'


function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="fade-in">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Product Leader with 10+ years of PM experience and a secret weapon: 
              10 years of engineering roots.
            </p>
            <p>
              I sit at the intersection of <span className="highlight">AI, Healthcare, 
              and Workforce Workflows</span> — the three places where the most 
              interesting problems live.
            </p>
            <p>
              Currently building <span className="highlight">IRIS</span> — an AI-powered 
              women's health platform using GPT-4, RAG, and FHIR because women's health 
              deserves smarter tech.
            </p>
            <p className="personal-note">
              When I'm not building things, I'm reading, singing, walking, 
              or just being present with the people (and pup) I love most. 🐾
            </p>
          </div>
          <div className="about-tags">
            <span>🧠 Product Strategy</span>
            <span>🤖 Healthcare AI</span>
            <span>🚀 0→1 Builder</span>
            <span>💻 Full Stack PM</span>
            <span>🏥 FHIR & HL7</span>
            <span>⚡ Agentic AI</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About