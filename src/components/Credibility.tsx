import { clouds, profile } from "../data/content"

export function Credibility() {
  return (
    <div className="credibility" aria-label="Key credentials">
      <div className="cred-item">
        <p className="cred-value">{profile.years}</p>
        <p className="cred-label">Years on Salesforce</p>
      </div>
      <div className="cred-item">
        <p className="cred-value">{clouds.length}</p>
        <p className="cred-label">Clouds & platforms</p>
      </div>
      <div className="cred-item">
        <p className="cred-value">5</p>
        <p className="cred-label">Industries delivered</p>
      </div>
      <div className="cred-item">
        <p className="cred-value">US</p>
        <p className="cred-label">Based · remote-ready</p>
      </div>
    </div>
  )
}
