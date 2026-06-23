import useScrollAnimation from '../hooks/useScrollAnimation'


function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="fade-in">
      <div className="about-text">
        <p>
          AI Product Manager with <span className="highlight">10+ years of 0-to-1 product experience</span> on 
          a 20-year engineering foundation. I bring real technical depth to every product decision.
        </p>
        <p>
          I sit at the intersection of <span className="highlight">AI product strategy, 
          healthcare AI, and workforce and operations platforms...</span> the three places where the most 
          interesting problems live.
        </p>
        <p>
          Currently building AI products end to end: <span className="highlight">agentic workflows, 
          clinical RAG, and evaluation-gated LLM features</span>. I've shipped healthcare AI with 
          GPT-4, RAG, and FHIR, validated with real clinicians.
        </p>
        <p>
          Ask me about: AI product strategy, agent evaluation and guardrails, 0→1 product development, 
          or what founder life at sCoolMeal was really like.
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