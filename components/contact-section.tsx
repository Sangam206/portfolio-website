"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! This is a demo form, so no message was actually sent.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <p>
              I'm always interested in hearing about new projects, opportunities, or just connecting with fellow
              developers and researchers. Feel free to reach out!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>sangambhatta3.2@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <Linkedin size={20} />
                </div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/sangam-bhatta/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/sangam-bhatta
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <Github size={20} />
                </div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <a href="https://github.com/Sangam206" target="_blank" rel="noopener noreferrer">
                    github.com/in/sangam-bhatta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
