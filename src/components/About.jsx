import useScrollAnimation from '../hooks/useScrollAnimation'


function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="fade-in">
      <div className="about-text">
        <p>
          Product Leader with <span className="highlight">10+ years of PM experience</span> and 
          10 years of engineering roots, I bring technical depth to every product decision.
        </p>
        <p>
          I sit at the intersection of <span className="highlight">AI product strategy, 
          workforce tech, and operations platforms...</span> the three places where the most 
          interesting problems live.
        </p>
        <p>
          Currently building AI products spanning <span className="highlight">agentic workflows, 
          workforce automation, and API integrations</span>. Previously built and shipped 
          healthcare AI with GPT-4, RAG, and FHIR.
        </p>
        <p>
          Ask me about: AI product strategy, 0→1 product development, agentic workflows, 
          or what startup founder life at sCoolMeal was really like.
        </p>
        <p className="personal-note">
          When I'm not building things, I'm reading, singing, walking, or just being 
          present with the people (and pup) I love most. 🐾
        </p>
      </div> 
    </section>
  )
}

export default About