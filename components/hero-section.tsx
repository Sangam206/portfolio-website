import { Download, ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Sangam Bhatta</span>
            </h1>
            <h2>Computer Science Researcher & Developer</h2>
            <p>Passionate about AI, Data Science, and Web Development.</p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-primary">
                <Download size={16} /> Download CV
              </a>
              <a href="#projects" className="btn btn-outline">
                <ChevronRight size={16} /> View Projects
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img src="/images/sangam-profile.png" alt="Sangam Bhatta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
