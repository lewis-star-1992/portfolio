import { useMemo, useState } from "react"
import { clouds, experience } from "../data/content"

const filters = [
  { id: "all", label: "All clouds" },
  { id: "core", label: "Core CRM" },
  { id: "industry", label: "Industry" },
  { id: "data", label: "Data & insight" },
  { id: "build", label: "Platform & integration" },
] as const

const groups: Record<string, string[]> = {
  core: ["sales", "service", "experience", "revenue", "marketing", "commerce", "field"],
  industry: ["mfg", "cg", "edu", "np", "health"],
  data: ["data", "analytics"],
  build: ["platform", "mulesoft"],
}

export function Expertise() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all")
  const [activeCloud, setActiveCloud] = useState<string | null>(null)

  const visible = useMemo(() => {
    if (filter === "all") return clouds
    const ids = new Set(groups[filter] ?? [])
    return clouds.filter((c) => ids.has(c.id))
  }, [filter])

  const usedBy = useMemo(() => {
    if (!activeCloud) return []
    return experience.filter((e) => e.clouds.includes(activeCloud)).map((e) => e.company)
  }, [activeCloud])

  return (
    <section className="section" id="expertise">
      <div className="shell reveal">
        <p className="section-label">Multi-cloud fluency</p>
        <h2 className="section-title">Salesforce landscape</h2>
        <p className="section-lead">
          Filter by domain, then select a cloud to see where it showed up in delivery — from Sales
          and Service to Data Cloud, industry clouds, and MuleSoft.
        </p>

        <div className="cloud-toolbar" role="tablist" aria-label="Cloud filters">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`chip${filter === f.id ? " active" : ""}`}
              onClick={() => {
                setFilter(f.id)
                setActiveCloud(null)
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="cloud-grid">
          {visible.map((cloud) => (
            <button
              key={cloud.id}
              type="button"
              className={`cloud-item${activeCloud === cloud.id ? " highlight" : ""}`}
              onClick={() => setActiveCloud((c) => (c === cloud.id ? null : cloud.id))}
              aria-pressed={activeCloud === cloud.id}
            >
              <h3>{cloud.name}</h3>
              <p>{cloud.focus}</p>
            </button>
          ))}
        </div>

        {activeCloud && (
          <p className="section-lead" style={{ marginTop: "1.5rem" }}>
            <strong style={{ color: "var(--ink)" }}>
              {clouds.find((c) => c.id === activeCloud)?.name}
            </strong>{" "}
            featured at: {usedBy.length ? usedBy.join(" · ") : "Supporting platform capability"}
          </p>
        )}
      </div>
    </section>
  )
}
