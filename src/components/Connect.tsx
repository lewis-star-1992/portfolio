import { FormEvent, useState } from "react"
import { profile } from "../data/content"

export function Connect() {
  const [status, setStatus] = useState<"idle" | "ready">("idle")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent from dmario-lewis portfolio`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus("ready")
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus("ready")
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="connect section" id="connect">
      <div className="connect-media" aria-hidden="true">
        <img src="./hero-coffee.png" alt="" />
        <div className="connect-veil" />
      </div>
      <div className="shell connect-inner reveal">
        <div>
          <p className="section-label">Connect</p>
          <h2 className="section-title">Let&apos;s talk Salesforce</h2>
          <p className="section-lead">
            Open to senior engineering, architecture, and multi-cloud delivery conversations —
            remote or hybrid.
          </p>
          <div className="connect-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>{profile.phone}</a>
          </div>
        </div>

        <form className="connect-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              placeholder="Role, timeline, or architecture challenge…"
            />
          </label>
          <div className="connect-actions">
            <button className="btn btn-primary" type="submit">
              Open email draft
            </button>
            <button className="btn btn-ghost" type="button" onClick={copyEmail}>
              Copy email
            </button>
          </div>
          {status === "ready" && (
            <p className="connect-note">Ready — check your mail client or clipboard.</p>
          )}
        </form>
      </div>
    </section>
  )
}
