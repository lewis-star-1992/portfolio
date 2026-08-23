import { industries, profile } from "../data/content"

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell reveal">
        <p className="section-label">Profile</p>
        <h2 className="section-title">Built for enterprise complexity</h2>
        <p className="section-lead">{profile.summary}</p>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              From nonprofit CRM foundations through manufacturing PPE commercial systems to global
              consumer services, the through-line is the same: translate messy business reality into
              maintainable Salesforce architecture — declarative where it should be, programmatic
              where it must be, integrated where the enterprise demands it.
            </p>
            <p>
              Comfortable owning solution design, coaching delivery quality, and stabilizing
              production — with deep hands-on fluency in Apex, LWC, Flow, security, analytics, and
              MuleSoft-style integration patterns.
            </p>
          </div>
          <ul className="industry-list">
            {industries.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
