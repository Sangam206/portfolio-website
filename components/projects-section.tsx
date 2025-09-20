import { Github, ExternalLink, Calendar } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Bus Route Finder App (Kathmandu)",
      description:
        "A mobile application that helps users find bus routes in Kathmandu. The app displays a map with highlighted bus routes and allows users to search for destinations to find the best route.",
      image: "/mobile-app-interface-showing-bus-routes-on-map.jpg",
      tags: ["React Native", "Django", "Google Maps API"],
      status: "In Progress",
      links: {},
    },
    {
      id: 2,
      title: "MoreBazaar (E-commerce Website)",
      description:
        "A modern e-commerce platform designed for efficient online shopping. Currently in progress, this project aims to provide a seamless shopping experience with advanced features.",
      image: "/images/logo.png",
      tags: ["HTML", "CSS"],
      links: {
        github: "https://github.com/Sangam206/ecommerce-website1",
        demo: "https://sangam206.github.io/ecommerce-website1/",
      },
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p>{project.description}</p>
                {project.status && (
                  <div className="project-status">
                    <Calendar size={16} /> {project.status}
                  </div>
                )}
                {project.links && Object.keys(project.links).length > 0 && (
                  <div className="project-links">
                    {project.links.github && (
                      <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
