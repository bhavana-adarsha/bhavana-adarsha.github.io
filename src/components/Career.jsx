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
                First product hire at a workforce tech startup. Led product for an 
                AI-powered workforce scheduling platform that hit{' '}
                <span className="highlight">$1M ARR</span>. Built and validated the AI 
                scheduling MVP that cut schedule build time from{' '}
                <span className="highlight">2 weeks to 15 minutes</span>. Designed 
                multi-component architecture and drove roadmap from concept to revenue. 
                Led integrations connecting scheduling with payroll, time-off, and 
                external workforce systems across healthcare and military organizations.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>sCoolMeal</h3>
              <span className="timeline-role">Co-Founder & Head of Product</span>
              <p>
                Built a restaurant POS platform for school cafeterias from zero. Took 
                it from <span className="highlight">10 → 2,500 meals/day</span>, survived 
                the chaos of real-world school lunch lines, and exited via acquisition. 
                Integrated payment processors, school parent portal SSO, and chatbot 
                automation to create a seamless experience for parents, staff, and 
                administrators.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>API & AI Integrations @ Various</h3>
              <span className="timeline-role">Product Leader</span>
              <p>
                Designed and delivered end-to-end API integrations across workforce, 
                payroll, and operations systems. Bridged complex systems to create 
                seamless user experiences and unlock business value. Integrations span{' '}
                <span className="highlight">ADP, Paysauce, and time-off systems</span> for 
                workforce and payroll, payment processors and student data systems at 
                schools, and <span className="highlight">AI APIs for agentic workflow 
                automation</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Career