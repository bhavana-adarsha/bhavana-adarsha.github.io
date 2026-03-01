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
              <h3>Duality Systems</h3>
              <span className="timeline-role">Product Lead, AI Scheduling Platform</span>
              <p>
                Led product for an AI-powered healthcare workforce scheduling platform
                that hit <span className="highlight">$1M ARR</span>. Built code that supported
                constrained optimization algorithms. Designed multi-component architecture
                and drove roadmap from concept to revenue. Worked on integrations to connect
                scheduling with payroll, time-off, and clinical systems.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>sCoolMeal</h3>
              <span className="timeline-role">Co-Founder & Product</span>
              <p>
                Built a restaurant POS platform purpose-built for school cafeterias.
                Took it from <span className="highlight">10 → 2,500 meals/day</span>,
                survived the chaos of real-world school lunch lines, and exited via
                acquisition. Integrated payment processors, school parent portal SSO,
                and Drift. Lived the dream while I was at it.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>API Integrations @ Various</h3>
              <span className="timeline-role">Product Leader</span>
              <p>
                Designed and delivered end-to-end API integrations across healthcare,
                workforce, and POS systems. Bridged complex systems to create seamless
                user experiences and unlock business value. Integrations span{' '}
                <span className="highlight">Epic EHR, FHIR APIs, and OpenFDA</span> on
                the healthcare side, <span className="highlight">ADP, Paysauce, and
                time-off systems</span> for workforce and payroll, and{' '}
                <span className="highlight">school parent portal SSO, payment processors,
                and student data systems</span> at schools.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Career