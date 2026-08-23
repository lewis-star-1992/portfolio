import { useState } from "react"
import { clouds, experience } from "../data/content"

export function Experience() {
  const [active, setActive] = useState(experience[0].id)
  const role = experience.find((e) => e.id === active) ?? experience[0]
  const cloudNames = role.clouds
    .map((id) => clouds.find((c) => c.id === id)?.name)
    .filter(Boolean) as string[]

  return (
    <section className="section" id="experience">
      <div className="shell reveal">
        <p className="section-label">Career</p>
        <h2 className="section-title">Selected experience</h2>
        <p className="section-lead">
          Senior delivery and architecture across global consumer services, education, manufacturing,
          nonprofit, and retail — with depth in both hands-on engineering and solution design.
        </p>

        <div className="exp-layout">
          <nav className="exp-nav" aria-label="Employers">
            {experience.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`exp-nav-btn${active === item.id ? " active" : ""}`}
                onClick={() => setActive(item.id)}
              >
                <strong>{item.company}</strong>
                <span>{item.period}</span>
              </button>
            ))}
          </nav>

          <article className="exp-panel" key={role.id}>
            <h3 className="exp-role">{role.role}</h3>
            <p className="exp-company">
              {role.website ? (
                <a href={role.website} target="_blank" rel="noreferrer">
                  {role.company}
                </a>
              ) : (
                role.company
              )}
            </p>
            <div className="exp-meta">
              <span>{role.period}</span>
              <span>{role.location}</span>
              <span>{role.industry}</span>
            </div>
            <p className="exp-overview">{role.overview}</p>
            <ul className="exp-highlights">
              {role.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="exp-clouds" aria-label="Related clouds">
              {cloudNames.map((name) => (
                <span className="tag" key={name}>
                  {name}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
