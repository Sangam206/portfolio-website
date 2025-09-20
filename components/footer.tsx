"use client"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Sangam Bhatta</h3>
            <p>Computer Science Researcher & Developer</p>
          </div>

          <div className="footer-social">
            <a href="mailto:sangambhatta3.2@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sangam-bhatta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Sangam206" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sangam Bhatta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
