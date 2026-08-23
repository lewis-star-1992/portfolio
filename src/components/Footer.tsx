import { profile } from "../data/content"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <div>
            {profile.title} · {profile.location}
          </div>
        </div>
        <div>© {year} · Crafted for enterprise Salesforce delivery</div>
      </div>
    </footer>
  )
}
