import { motion } from "framer-motion"
import { profile } from "../data/content"

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-media" aria-hidden="true">
        <img src="./hero-coffee.png" alt="" />
      </div>
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-content">
        <motion.h1
          className="hero-brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          D&apos;<em>Mario</em> Lewis
        </motion.h1>
        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.title} · {profile.subtitle}
        </motion.p>
        <motion.p
          className="hero-support"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Enterprise multi-cloud Salesforce for global operators — architecture, automation, and
          integrations that scale.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="btn btn-primary" href="#experience">
            View experience
          </a>
          <a className="btn btn-ghost" href="#connect">
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
