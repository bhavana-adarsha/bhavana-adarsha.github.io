import useScrollAnimation from '../hooks/useScrollAnimation'

function Contact() {
const ref = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="fade-in">
      <div className="contact-container">
        <h2>Let's Connect!</h2>
        <p>Whether it's healthcare AI, workforce tech, building products that matter — or just a good conversation, I'd love to hear from you.</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/bhav515/" target="_blank" rel="noreferrer">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/bhavana-adarsha" target="_blank" rel="noreferrer">
            💻 GitHub
          </a>
          <a href="mailto:bhavana.adarsha@gmail.com">
            📧 Email
          </a>
          <a href="https://www.goodreads.com/user/show/10263958-bhavana-adarsha">
            📚 Goodreads
          </a>
        </div>
        <p className="contact-footer">
          Built with ❤️ by Bhavana Adarsha
        </p>
      </div>
    </section>
  )
}

export default Contact