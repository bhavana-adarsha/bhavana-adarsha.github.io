import useScrollAnimation from '../hooks/useScrollAnimation'

function Hero() {
  const ref = useScrollAnimation();

  return (
    <section id="hero"ref={ref} className="fade-in">
      <div className="hero-container">
        <h1>Bhavana Adarsha</h1>
        <h2>Product Leader. Ex-Founder. Healthcare AI Builder.</h2>
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