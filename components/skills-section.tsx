"use client"

import { useState } from "react"
import { Code, Database, BarChart, Paintbrush as PaintBrush, Laptop, Brain, Search } from "lucide-react"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("programming")

  const skillsData = {
    programming: [
      { name: "Python", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Code },
      { name: "C", icon: Code },
      { name: "C++", icon: Code },
    ],
    databases: [
      { name: "MySQL", icon: Database },
      { name: "Firebase", icon: Database },
    ],
    datascience: [
      { name: "Jupyter", icon: BarChart },
      { name: "Tableau", icon: BarChart },
      { name: "WEKA", icon: BarChart },
      { name: "Excel", icon: BarChart },
      { name: "Google Dashboard", icon: BarChart },
    ],
    other: [
      { name: "UI/UX Design", icon: PaintBrush },
      { name: "Frontend Development", icon: Laptop },
      { name: "Machine Learning", icon: Brain },
      { name: "Research", icon: Search },
    ],
  }

  const tabs = [
    { id: "programming", label: "Programming" },
    { id: "databases", label: "Databases" },
    { id: "datascience", label: "Data Science" },
    { id: "other", label: "Other Skills" },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>

        <div className="skills-tabs">
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            <div className={`tab-pane ${activeTab ? "active" : ""}`}>
              <div className="skills-grid">
                {skillsData[activeTab as keyof typeof skillsData]?.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={index} className="skill-card">
                      <div className="skill-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3>{skill.name}</h3>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
