# CLAUDE.md

## Project Type

**Type:** java

---

## Repository Role

Deployable microservice for running CaseHub's goal-driven coordination engine — shared context, autonomous workers, milestones, goals, and event-driven execution. Provides a standalone Quarkus application with REST endpoints wrapping `casehub-engine`.

**GitHub:** [mdproctor/flow](https://github.com/mdproctor/flow)
**Tier:** Integration (pending platform coherence analysis — see casehubio/parent#78)

---

## Build Commands

```bash
# Build and install
mvn --batch-mode install

# Skip tests
mvn --batch-mode install -DskipTests
```

---

## Work Tracking

**Issue tracking:** enabled
**GitHub repo:** mdproctor/flow
**Note:** GitHub Issues are disabled on this repo — reference work items via casehubio/parent issues where applicable.

---

## Development Workflow

Before designing: `superpowers:brainstorming`
Before implementing: `superpowers:test-driven-development`
For all Java work: `java-dev`
Before committing: `superpowers:requesting-code-review`

---

## Routing

| Artifact   | Destination | Notes |
|------------|-------------|-------|
| adr        | project     | lands in `docs/adr/` — promoted at epic close |
| specs      | project     | lands in `docs/specs/` — promoted at epic close |
| blog       | workspace   | staged here; published to mdproctor.github.io via publish-blog |
| plans      | workspace   | stay in workspace permanently |
| design     | workspace   | epic journal stays in workspace |
| snapshots  | workspace   | stay in workspace permanently |
| handover   | workspace   | |

---

## Platform Context

This repo is one component of the casehubio multi-repo platform. **Before implementing anything — any feature, SPI, data model, or abstraction — run the Platform Coherence Protocol.**

> **Platform docs:** Local paths use `../parent/docs/` as root. If a path doesn't exist, the parent repo isn't cloned locally — fetch from `https://raw.githubusercontent.com/casehubio/parent/main/docs/<path>` instead.

The protocol asks: Does this already exist elsewhere? Is this the right repo for it? Does this create a consolidation opportunity? Is this consistent with how the platform handles the same concern in other repos?

**Platform architecture (fetch before any implementation decision):**
```
https://raw.githubusercontent.com/casehubio/parent/main/docs/PLATFORM.md
```

## Writing Style Guide

**The writing style guide at `~/claude-workspace/writing-styles/blog-technical.md` is mandatory for all blog and diary entries.** Load it in full before drafting. Complete the pre-draft voice classification (I / we / Claude-named) before generating any prose. Do not show a draft without verifying it against the style guide.
