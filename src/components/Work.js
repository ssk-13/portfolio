import React, { useState } from "react";
import "./new.css";
import image from "../assets/120.png";
import { experiences } from "../record";
import { projects } from "../record";
import { technologies } from "../record";

function Work() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionName) => {
    if (expandedSection === sectionName) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionName);
    }
  };

  return (
    <div className="container">
      <div className="rowss" onClick={() => toggleSection("experience")}>
        <h5 className="highlights">Experience</h5>
        <img src={image} alt="alt text" className="image" />
      </div>
      {expandedSection === "experience" && (
        <div className="section-content">
          {experiences.map((record) => {
            return (
              <>
                <h2>{record.title}</h2>
                <p>
                  {record.company_name} | ({record.date})
                </p>

                <p>{record.points}</p>
              </>
            );
          })}
        </div>
      )}

      <div className="rowss" onClick={() => toggleSection("project")}>
        <h5 className="highlights">Project</h5>
        <img src={image} alt="alt text" className="image" />
      </div>
      {expandedSection === "project" && (
        <div className="section-content">
          {projects.map((record) => {
            return (
              <>
                <h2>{record.name}</h2>
                <p>
                  {record.tags.map((tag) => {
                    return <li className="tech"> {tag.name}</li>;
                  })}
                </p>
                <p>{record.description}</p>

                <a href={record.source_code_link}>github</a>
              </>
            );
          })}
        </div>
      )}

      <div className="rowss" onClick={() => toggleSection("techstack")}>
        <h5 className="highlights">TechStack</h5>
        <img src={image} alt="alt text" className="image" />
      </div>
      {expandedSection === "techstack" && (
        <div className="section-content">
          <div class="icon-grid">
          {technologies.map((record) => {
          return (
            <div key={record} className="icon">
              <img class="svg"
                src={record.icon}
                alt={record.name}
                
              />
            </div>
          );
        })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
