# Growth Agent — Product Specification

**Working name:** Growth Agent (Skill Roadmap + Portfolio Curator)  
**Version:** 0.2 (concept spec)  
**Status:** Draft  
**Author:** Neha  
**Last updated:** 2026-06-24

---

## 1. Summary

Growth Agent is a personal agentic system that treats **learning** and **professional storytelling** as one loop. You declare a skill goal (e.g. “Learn Rust in 90 days”), and the agent produces a paced roadmap with weekly projects, resources, and checkpoints. As you complete work—course projects, side builds, job tasks—it automatically enriches a living portfolio record with metrics, artifacts, and audience-specific blurbs for LinkedIn, resume, and cover letters.

The merge is intentional: roadmaps generate portfolio-worthy projects by design, and portfolio gaps reveal what to learn next.

---

## 2. Problem

| Pain | Today | With Growth Agent |
|------|--------|-------------------|
| Learning without output | Courses pile up; nothing shippable | Every week ends in a demonstrable artifact |
| Portfolio drift | Projects scattered across repos, notes, memory | Single source of truth, continuously updated |
| Repetitive rewriting | Same project rewritten 3× for different formats | One canonical entry → tailored exports |
| Stalled motivation | No clear “done” for a skill | Checkpoints, pace adjustments, streak visibility |
| Misaligned goals | Resume says X; you’re learning Y | Agent surfaces gaps and suggests targeted projects |

---

## 3. Vision

> “Tell the agent what you want to become skilled at and how you want to be perceived professionally. It plans the path, nudges you through it, and keeps your outward-facing narrative accurate without manual copy-paste.”

---

## 4. Target User

**Primary:** Individual contributor or career-switcher who learns by building and needs consistent portfolio/resume maintenance.

**Secondary:** Student or bootcamp grad preparing for job search while upskilling.

**Not in scope (v1):** Team hiring managers, enterprise L&D platforms, or automated job applications without human approval.

---

## 5. Core Concept: The Growth Loop

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTENT                              │
│  "Learn Rust in 90 days" + "Target: systems/backend roles"   │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   ROADMAP ENGINE                             │
│  Weekly projects · resources · checkpoints · pace model      │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   EXECUTION LAYER                            │
│  User builds · agent prompts reflection · captures metrics   │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                 PORTFOLIO KNOWLEDGE BASE                       │
│  Projects · skills · outcomes · artifacts · narratives       │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   EXPORT ENGINE                              │
│  LinkedIn · resume bullets · cover letter snippets · README  │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
                    FEEDBACK → next roadmap cycle
```

---

## 6. Functional Requirements

### 6.1 Onboarding & Profile

- Capture **current skills** (self-rated + evidence links).
- Capture **target skills** and optional **target role/industry**.
- Capture **time budget** (hours/week), **deadline** (e.g. 90 days), and **learning style** (project-first, reading-first, mixed).
- Capture **voice preferences** for exports (formal/conversational, metric-heavy/story-heavy).
- Optional: import existing resume, LinkedIn export, or GitHub profile for baseline.

### 6.2 Roadmap Engine

- Decompose a skill goal into **phases** (foundations → applied → capstone).
- Generate **weekly plans** with:
  - 1 primary project (portfolio-worthy when possible)
  - 2–5 curated resources (docs, videos, exercises)
  - Success criteria / checkpoint rubric
  - Estimated hours
- **Adapt pace** when user marks weeks complete, skipped, or overloaded.
- **Suggest catch-up or stretch** paths without guilt-heavy UX.
- Link each roadmap item to a **future portfolio entry** (pre-created stub).

### 6.3 Portfolio Curator

- Maintain a **canonical project record** per artifact:
  - Title, summary, problem, approach, outcome
  - Skills demonstrated (tagged)
  - Metrics (users, latency, LOC, test coverage, etc.—user-provided or parsed)
  - Links (repo, demo, write-up)
  - Date range, status (in progress / shipped / archived)
  - Evidence attachments (screenshots, PR links, benchmarks)
- Support **non-code work** (design, writing, leadership, talks).
- Version history: track how blurbs evolve over time.

### 6.4 Export Engine (Audience-Specific Narratives)

From one canonical entry, generate:

| Export | Constraints |
|--------|-------------|
| **LinkedIn post** | Hook, story arc, lesson learned, hashtags optional, ≤ ~1,300 chars |
| **Resume bullet** | Action + method + metric, 1–2 lines, ATS-friendly keywords |
| **Cover letter snippet** | Tie project to company/role context when provided |
| **Portfolio page section** | Longer narrative + tech stack + screenshots |
| **GitHub README blurb** | Technical, concise, setup-oriented |

All exports require **human review before publish** (approval gate).

### 6.5 Weekly Agent Rituals

| Trigger | Agent behavior |
|---------|----------------|
| Start of week | Deliver plan summary + resources |
| Mid-week (optional) | Check-in: blockers, scope trim suggestions |
| End of week | Checkpoint quiz or reflection prompts; draft portfolio update |
| Missed week | Reschedule with reduced scope; preserve streak semantics |
| Month end | Progress report: skills gained, portfolio additions, gap analysis |

### 6.6 Gap Analysis & Next Goals

- Compare **target role skill profile** vs **demonstrated skills** (from portfolio).
- Recommend next 30/60/90-day goals.
- Flag **weak evidence** (“You claim Rust but have no public artifact—Week 4 project fixes this”).

---

## 7. Agent Architecture

### 7.1 Agent Roles (single orchestrator, specialized sub-behaviors)

```
Orchestrator (Growth Agent)
├── Planner      — roadmaps, pacing, replanning
├── Curator      — portfolio CRUD, tagging, deduping
├── Writer       — audience-specific copy generation
├── Researcher   — fetch/docs summarize resources (optional)
└── Reviewer     — consistency, exaggeration check, gap analysis
```

### 7.2 Tool Surface (MCP / function calls)

| Tool | Purpose |
|------|---------|
| `profile.get` / `profile.update` | User goals, skills, preferences |
| `roadmap.create` / `roadmap.get_week` / `roadmap.replan` | Plan management |
| `checkpoint.submit` | User reflection, hours spent, completion status |
| `portfolio.upsert` / `portfolio.list` / `portfolio.get` | Canonical records |
| `portfolio.link_artifact` | Attach repo URL, file, screenshot |
| `export.generate` | `{ entry_id, format, context? }` → draft copy |
| `export.approve` | Mark draft as reviewed/final |
| `gap.analyze` | Skills vs targets report |
| `notify.send` | Email/Slack/calendar (optional integrations) |

### 7.3 Memory Model

| Layer | Contents | Persistence |
|-------|----------|-------------|
| **Profile** | Identity, goals, voice, constraints | Long-term |
| **Roadmap state** | Current week, phase, history | Long-term |
| **Portfolio KB** | Projects, skills graph, exports | Long-term |
| **Session** | Current conversation, draft edits | Short-term |
| **Episodic log** | Agent actions for audit/debug | Append-only |

Recommended storage for personal use: **SQLite** or **markdown files in a git repo** (human-readable, diffable).

### 7.4 Tools & Memory in Practice

Tools are the agent’s **hands**; memory is **what persists between sessions**. The LLM does not store roadmaps or portfolio entries in model weights—every durable fact lives in files/DB and is loaded via tools.

#### Tool categories

| Category | Tools | MVP? |
|----------|-------|------|
| **Profile** | `profile.get`, `profile.update` | Yes |
| **Roadmap** | `roadmap.create`, `roadmap.get_week`, `roadmap.replan` | Yes |
| **Checkpoint** | `checkpoint.submit` | Yes |
| **Portfolio** | `portfolio.upsert`, `portfolio.list`, `portfolio.get`, `portfolio.link_artifact` | Yes |
| **Export** | `export.generate`, `export.approve` | Yes |
| **Analysis** | `gap.analyze` | Yes |
| **Notify** | `notify.send` | No (v1.1) |
| **External** | GitHub API, web fetch, Notion/Obsidian sync | No (v1.1+) |

#### On-disk layout (markdown MVP)

```text
~/growth-agent/
  profile.yaml                 # Profile memory
  roadmaps/
    rust-90.yaml               # Roadmap state
  portfolio/
    checksum-cli.md            # Portfolio KB (one file per entry)
  exports/
    checksum-cli-linkedin.md   # Generated drafts (linked to entry)
  logs/
    actions.jsonl              # Episodic log
  templates/
    rust-90-weeks.yaml         # Optional hand-authored skill templates
```

Each tool maps to concrete read/write operations on these paths. Example: `portfolio.upsert` merges frontmatter + body into `portfolio/{id}.md`; `export.generate` writes to `exports/` and updates the `exports` block in the portfolio entry.

#### Session bootstrap (every conversation)

At the start of a session, the orchestrator should load state before planning or writing:

1. `profile.get` — active goals, hours/week, target role, voice preferences
2. `roadmap.get_week` — current week, status, linked portfolio stub
3. `portfolio.list` — shipped vs stub entries, skill tags
4. `gap.analyze` (optional) — when user asks about job fit or next goals

Only **summaries** of this state go into the LLM context—not the entire episodic log. Full files are fetched on demand via `portfolio.get` or similar.

#### What is not MVP memory

| Mechanism | Role |
|-----------|------|
| **Vector DB / RAG** | Optional later for “find projects like this” or semantic search across portfolio |
| **Vendor “memory” features** | Optional supplement; never source of truth |
| **Raw chat history** | Ephemeral; anything important must be written via tools |

#### End-to-end example: missed week + repo link

| Step | Behavior | Tool | Memory layer updated |
|------|----------|------|----------------------|
| 1 | Load current week and stub | `roadmap.get_week`, `portfolio.get` | — (read) |
| 2 | Mark week skipped, shrink next | `roadmap.replan` | Roadmap state |
| 3 | Save reflection and repo URL | `checkpoint.submit`, `portfolio.link_artifact` | Portfolio KB |
| 4 | Draft resume bullet | `export.generate` | Export draft on entry |
| 5 | Check target-role fit | `gap.analyze` | — (read-only report) |
| 6 | Append audit record | (internal) | Episodic log |

A new chat days later still works because steps 2–4 wrote to disk; bootstrap reloads that state.

### 7.5 Single vs Multi-Agent Rationale

#### Decision: one orchestrator (recommended for MVP and v1)

Growth Agent uses **one orchestrator** with specialized **sub-behaviors** (Planner, Curator, Writer, Researcher, Reviewer)—not five independent agents that message each other.

```
User
  │
  ▼
┌─────────────────────────────────────┐
│     Growth Agent (Orchestrator)      │
│  ┌─────────┐ ┌─────────┐ ┌────────┐ │
│  │ Planner │ │ Curator │ │ Writer │ …│  ← roles = prompts/steps, not separate products
│  └────┬────┘ └────┬────┘ └───┬────┘ │
│       └───────────┴──────────┘       │
│                   │                  │
│            Tool calls (MCP)          │
└───────────────────┬─────────────────┘
                    ▼
           ~/growth-agent/ (memory)
```

#### Comparison

| Approach | Description | Pros | Cons |
|----------|-------------|------|------|
| **Single agent + tools** | One LLM run calls tools in sequence | Simple, cheap, easy to debug | Long runs may need step boundaries |
| **Single agent + role steps** | Same model, different system prompts per phase | Better quality for write vs plan | Slightly more orchestration code |
| **Multi-agent** | Separate LLM instances (Planner agent → Writer agent) | Strong separation of concerns | Higher cost, latency, failure modes; overkill for personal use |

#### When to use role steps (still one orchestrator)

Use sequential **steps** inside one session—not separate agent products:

| Flow | Steps |
|------|-------|
| Start new goal | Planner → (optional) Researcher → write roadmap via tools |
| End of week | Curator (ingest checkpoint) → Writer (exports) → Reviewer (metric/consistency check) |
| Job application mode | gap.analyze → Curator (select entries) → Writer (cover letter) → Reviewer |

**Reviewer** is the most valuable optional second LLM pass: it flags invented metrics, tone mismatch, and contradictions with `profile.yaml` before the user sees drafts.

#### When multi-agent might make sense (post-v1)

Consider a true second agent only if:

- Review quality stays poor after a Reviewer **step** (not a separate product)
- Researcher needs heavy web browsing in isolation from write tools
- You expose Growth Agent as a **service** with strict role-based permissions

Even then, prefer **one orchestrator coordinating steps** over autonomous agents negotiating with each other.

#### User-facing rule

The user always talks to **one** Growth Agent. Roles are implementation details; the agent presents a unified voice and summary.

---

## 8. Data Model (minimal)

### UserProfile

```yaml
id: string
display_name: string
target_role: string | null
hours_per_week: number
learning_style: project_first | reading_first | mixed
voice: { tone: formal|conversational, emphasis: metrics|story }
skills:
  - name: string
    level: 1-5
    evidence_count: number
active_goals:
  - skill: string
    deadline: date
    status: active|paused|completed
```

### Roadmap

```yaml
id: string
skill: string
start_date: date
end_date: date
phases:
  - name: string
    weeks: WeekPlan[]
current_week: number
pace_multiplier: float  # 1.0 = on track
```

### WeekPlan

```yaml
week_number: number
theme: string
project:
  title: string
  description: string
  acceptance_criteria: string[]
  portfolio_stub_id: string
resources:
  - title: string
    url: string
    type: doc|video|exercise
    estimated_minutes: number
checkpoint:
  prompts: string[]
  rubric: string[]
status: pending|in_progress|completed|skipped
```

### PortfolioEntry

```yaml
id: string
title: string
status: stub|in_progress|shipped|archived
problem: string
approach: string
outcome: string
metrics: { key: string, value: string }[]
skills: string[]
links: { label: string, url: string }[]
date_started: date
date_completed: date | null
roadmap_ref: { roadmap_id, week_number } | null
exports:
  linkedin: { draft, approved, updated_at }
  resume: { draft, approved, updated_at }
  cover_letter: { draft, approved, updated_at }
```

---

## 9. Key User Flows

### Flow A: Start a new skill goal

1. User: “I want to learn Rust in 90 days, 5 hrs/week, backend focus.”
2. Agent asks 2–3 clarifying questions (prior programming exp, OS preference, portfolio goals).
3. Agent generates 90-day roadmap overview for approval.
4. On approve: create Week 1 plan + portfolio stub for Week 1 project.
5. Schedule weekly check-in (calendar or notification).

### Flow B: Complete a week

1. User marks week done + answers checkpoint prompts.
2. Agent drafts portfolio entry from reflections (+ optional repo scrape).
3. User edits canonical entry.
4. Agent offers export pack (LinkedIn + resume + README).
5. User approves exports; agent advances to next week (or replans).

### Flow C: Ad-hoc project (not from roadmap)

1. User: “I shipped a feature at work—add to portfolio.”
2. Curator ingests details; tags skills; no roadmap link required.
3. Gap analysis updates: “Rust still light—consider Week N project.”

### Flow D: Job application mode

1. User pastes job description URL or text.
2. Agent selects top 3 portfolio entries + skills alignment summary.
3. Generates tailored cover letter paragraphs and resume reorder suggestion.
4. All outputs flagged as drafts for review.

---

## 10. Agent Behavior Guidelines (system prompt principles)

- **Project-first:** Prefer shippable artifacts over passive consumption every week.
- **Honest metrics:** Never invent numbers; ask user or mark `[metric needed]`.
- **Pace empathy:** Offer scope reduction before guilt.
- **One canonical truth:** Edit portfolio entry first; derive all exports from it.
- **Approval gates:** No auto-posting to LinkedIn, no auto-send email.
- **Explain replans:** When changing the roadmap, show what moved and why.

---

## 11. Example: Rust 90-Day Roadmap (abbreviated)

| Week | Theme | Project (portfolio stub) |
|------|-------|--------------------------|
| 1–2 | Ownership & basics | CLI tool: file checksum utility |
| 3–4 | Error handling & tests | HTTP client wrapper with tests |
| 5–6 | Structs & collections | JSON log parser + benchmarks |
| 7–8 | Concurrency intro | Multi-threaded web scraper (respectful rate limits) |
| 9–10 | Async | Small async API (Axum/Tokio) |
| 11 | Systems touch | Bindings or FFI mini-project |
| 12 | Capstone | “Choose one”: CLI product, API service, or WASM demo |

Each week: Rust Book chapters, Rustlings exercises, docs.rs references, checkpoint rubric.

---

## 12. Integrations (phased)

| Phase | Integration | Use |
|-------|-------------|-----|
| MVP | Local files / SQLite | Storage |
| MVP | CLI or Cursor chat | Interface |
| v1.1 | GitHub API | Repo metadata, languages, README |
| v1.1 | Google Calendar / iCal | Weekly reminders |
| v1.2 | LinkedIn (manual paste) | Export only—no auto-post |
| v2 | Notion/Obsidian sync | Portfolio mirror |
| v2 | Job board URL fetch | Application mode context |

---

## 13. Non-Functional Requirements

- **Privacy:** Personal data local-first; no training on user content without consent.
- **Portability:** Export entire KB as JSON/markdown zip.
- **Auditability:** Log agent tool calls and export generations.
- **Offline-friendly:** Core portfolio readable without LLM (static files).
- **Cost control:** Batch weekly planning; cache resource lists; small model for check-ins, larger for exports (optional).

---

## 14. MVP Scope (4–6 weekends)

**In:**

- Profile + one active roadmap
- 12-week template generator (parameterized by skill + duration)
- Portfolio entry CRUD (markdown files)
- Weekly checkpoint + portfolio draft from reflection
- Three export formats: resume bullet, LinkedIn post, README blurb
- Manual approval of all exports
- Simple gap report (skill tags vs goal)

**Out (defer):**

- GitHub auto-ingest
- Calendar sync
- Cover letter with company-specific research
- Multi-goal parallel roadmaps
- Mobile app

**MVP interface options:**

1. **Cursor agent + MCP tools** over a `~/growth-agent/` folder (fastest for you)
2. **CLI** (`growth plan`, `growth week`, `growth export`)
3. **Minimal web UI** (React, similar stack to Solaris)

---

## 15. Success Metrics (personal)

| Metric | Target (90 days of use) |
|--------|-------------------------|
| Roadmap weeks completed | ≥ 70% of planned weeks |
| Portfolio entries with evidence links | ≥ 1 per completed week |
| Approved exports used externally | ≥ 4 (posts or applications) |
| Time to produce resume bullet from project | < 5 minutes |
| User-reported “portfolio accuracy” | ≥ 4/5 |

---

## 16. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Generic roadmaps | Skill-specific templates + user clarifiers; replan from checkpoint data |
| Hallucinated achievements | Reviewer sub-agent; `[verify]` tags; no metric without source |
| Abandonment after Week 2 | Smaller Week 1 win; optional “minimum viable week” mode |
| Export sameness | Voice profile + format-specific templates + banned phrase list |
| Over-engineering | MVP = markdown + one orchestrator; add tools only when painful |

---

## 17. Open Questions

1. **Storage:** Git-backed markdown vs SQLite—which fits your workflow?
2. **Interface:** Cursor-native MCP vs standalone CLI vs small web app?
3. **Skill templates:** Hand-authored (quality) vs fully generated (flexibility)?
4. **Work projects:** NDA-aware fields (redact employer, describe generically)?
5. **Multi-goal:** One active roadmap at a time, or parallel tracks?

---

## 18. Suggested Name Alternatives

- **Pathfolio** — path + portfolio
- **Forge** — forging skills and narrative
- **Ledger** — record of growth
- **Growth Agent** — descriptive, neutral

---

## 19. Next Steps

1. Resolve open questions (§17)—especially storage and interface.
2. Create `~/growth-agent/` scaffold: `profile.yaml`, `portfolio/`, `roadmaps/`.
3. Implement 5 MCP tools: `roadmap.create`, `roadmap.get_week`, `checkpoint.submit`, `portfolio.upsert`, `export.generate`.
4. Author one gold-standard template: **Rust 90-day** (full 12-week JSON/YAML).
5. Dogfood for 2 weeks; tune checkpoint prompts and export quality.

---

## Appendix A: Sample Orchestrator Prompt (sketch)

```
You are Growth Agent. You help the user learn skills through weekly projects
while maintaining an accurate professional portfolio.

Rules:
- Every week must produce or advance a portfolio entry.
- Generate exports only from approved portfolio canonical text.
- Never fabricate metrics; ask or placeholder.
- Replan transparently when the user falls behind.
- End each session with one clear next action.

Tools: profile.*, roadmap.*, portfolio.*, export.*, gap.analyze
```

## Appendix B: Sample Week 1 Checkpoint Prompts

1. What did you build this week? Link repo or demo.
2. What was hardest about ownership/borrowing (or `{skill_topic}`)?
3. One metric or concrete outcome (even small: “handles 10k files/sec”).
4. What would you tell a interviewer in 30 seconds?
5. Hours spent vs planned—should next week scale up or down?

---

*End of spec v0.2*
