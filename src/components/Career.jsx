import useScrollAnimation from '../hooks/useScrollAnimation'

function Career() {
  const ref = useScrollAnimation()

  return (
    <section id="career" ref={ref} className="fade-in">
      <div className="career-container">
        <h2>A Few Career Highlights</h2>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>IRIS Digi</h3>
              <span className="timeline-role">Founder & AI Product Manager</span>
              <p>
                Independent AI product practice, building and shipping agentic and LLM 
                products end to end. Shipped a{' '}
                <span className="highlight">GPT-4 clinical lab summarizer (RAG)</span>{' '}
                validated with 15 clinicians and 50 patients, a ReAct workforce anomaly 
                agent, and a conversational onboarding agent. Authored an{' '}
                <span className="highlight">AI Release Readiness Framework and Agent GTM 
                Playbook</span> defining evaluation criteria, guardrails, and adoption metrics.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Duality Systems</h3>
              <span className="timeline-role">Product Lead, AI Scheduling Platform</span>
              <p>
                First product hire at a workforce tech startup. Owned product for an 
                AI scheduling platform{' '}
                <span className="highlight">(constraint-optimization engine)</span> that 
                scaled to <span className="highlight">$1M ARR across 15 hospital systems</span>. 
                Validated the MVP through 20+ scheduler interviews, then drove it from 
                concept to revenue, cutting schedule build time from{' '}
                <span className="highlight">2 weeks to 15 minutes</span>. Led the enterprise 
                integrations connecting scheduling with payroll, time-off, and external 
                workforce systems for healthcare and military clients.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>sCoolMeal</h3>
              <span className="timeline-role">Co-Founder & Head of Product</span>
              <p>
                Co-founded and exited (acquired 2019) a school-cafeteria POS and ordering 
                platform, as the technical co-founder. Took it from{' '}
                <span className="highlight">10 → 2,500 meals/day</span>, survived the chaos 
                of real-world school lunch lines, and architected the full platform end to 
                end: POS, payments, GPS tracking, e-commerce, and chatbot. Hired and led 
                the founding engineering team.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Career