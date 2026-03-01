import useScrollAnimation from '../hooks/useScrollAnimation'

function Hero() {
  const ref = useScrollAnimation()

  return (
    <section id="hero" ref={ref}>
      <div className="hero-container">
         <img
          src="/bhavana.jpg"
          alt="Bhavana Adarsha"
          className="about-photo"
          width="200"
          height="200"
        />
        <h1>Bhavana Adarsha</h1>
        <h2>Product Leader. Ex-Founder. AI Builder. I build B2B SaaS products from zero to one and ship things that matter.</h2>
        <p>Welcome to my portfolio — a sneak peek into my product thinking & builder brain.</p>
        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default Hero