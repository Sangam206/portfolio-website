import { BookOpen, User, Briefcase, MapPin, Mail, Linkedin, Github } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am currently pursuing my undergraduate degree in Computer Science with AI at Sunway College Kathmandu,
              which is affiliated with Birmingham City University (BCU). I'm in my 1st year of studies, building a
              strong foundation in computer science principles and exploring the exciting field of artificial
              intelligence.
            </p>
            <p>
              My goal is to build innovative solutions that bridge the gap between technology and real-world
              applications. I'm particularly interested in how AI and data science can be used to solve complex problems
              and improve people's lives.
            </p>
            <div className="education">
              <h3>Education</h3>
              <div className="education-card">
                <div className="education-icon">
                  <BookOpen size={20} />
                </div>
                <div className="education-details">
                  <h4>BSc (Hons) Computer Science with Artificial Intelligence</h4>
                  <p>Sunway College Kathmandu, affiliated with Birmingham City University (BCU)</p>
                  <p>2023 - Present</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <h3>
                <User size={20} /> Personal Info
              </h3>
              <ul>
                <li>
                  <Mail size={16} /> sangambhatta3.2@gmail.com
                </li>
                <li>
                  <Linkedin size={16} />
                  <a href="https://www.linkedin.com/in/sangam-bhatta/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/sangam-bhatta
                  </a>
                </li>
                <li>
                  <Github size={16} /> github.com/sangambhatta
                </li>
                <li>
                  <MapPin size={16} /> Kathmandu, Nepal
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h3>
                <Briefcase size={20} /> Interests
              </h3>
              <div className="interests">
                <span>Artificial Intelligence</span>
                <span>Data Science</span>
                <span>Web Development</span>
                <span>UI/UX Design</span>
                <span>Machine Learning</span>
                <span>Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
