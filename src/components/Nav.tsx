import { useEffect, useState } from "react"
import { profile } from "../data/content"

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#connect", label: "Connect" },
]

type Props = { scrolled: boolean }

export function Nav({ scrolled }: Props) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const onScroll = () => {
      let current = ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          {profile.name}
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                className={`nav-link${active === link.href.slice(1) ? " active" : ""}`}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-cta" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
              Email
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
