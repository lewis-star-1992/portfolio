import { certifications, education, skillGroups } from "../data/content"

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="shell reveal">
        <p className="section-label">Craft</p>
        <h2 className="section-title">Capabilities</h2>
        <p className="section-lead">
          Architecture through production — the operating system of a senior Salesforce engineer who
          still ships.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-block" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="edu-row">
          <div className="edu-block">
            <h3>Education</h3>
            <p>
              <strong>{education.school}</strong>
            </p>
            <p>{education.degree}</p>
            <p>
              {education.location} · {education.period}
            </p>
          </div>
          <div className="cert-block">
            <h3>Certification</h3>
            {certifications.map((cert) => (
              <div key={cert.name}>
                <p>
                  <strong>{cert.name}</strong>
                </p>
                <p>
                  {cert.issuer} · Issued {cert.issued}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
