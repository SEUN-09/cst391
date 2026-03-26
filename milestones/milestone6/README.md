# CST391 — Milestone 6: Final Benchmark Presentation

**Student:** Oluwaseun Akerele
**Course:** CST391 — JavaScript Web Application Development
**Institution:** Grand Canyon University
**Date:** March 2026

---

## Table of Contents

- [Overview](#overview)
- [Executive Summary](#executive-summary)
- [Applications Built](#applications-built)
  - [Milestone 3 — Backend REST API](#milestone-3--backend-rest-api)
  - [Milestone 4 — Angular Frontend](#milestone-4--angular-frontend)
  - [Milestone 5 — React Frontend](#milestone-5--react-frontend)
- [Christian Worldview & Web Accessibility](#christian-worldview--web-accessibility)
- [Screencast Demonstrations](#screencast-demonstrations)
- [Presentation](#presentation)
- [Competency Demonstrated](#competency-demonstrated)
- [Project Structure](#project-structure)

---

## Overview

This repository contains all deliverables for **Milestone 6**, the final benchmark assignment for CST391. The milestone consolidates the work completed across Milestones 3, 4, and 5 into a single cohesive presentation, demonstrating full end-to-end development of a logistics web application — **Samopel Logistics Dispatch Hub** — built using a three-tier architecture: a backend REST API, an Angular frontend, and a React frontend migration.

The presentation is structured as a professional job-interview-style walkthrough, covering application architecture, CRUD operations, technical challenges, lessons learned, and a Christian worldview perspective on web accessibility.

---

## Executive Summary

The **Samopel Logistics Dispatch Hub** is a full-stack web application designed to track and manage delivery consignments from pickup to drop-off. Across three progressive milestones, the project evolved from a backend API into two fully functional frontend applications.

| **Milestone 6** | Final Benchmark Presentation — Full Walkthrough | [▶ Watch on Loom](https://www.loom.com/share/aad1eafbf29f447eb7d78c98c21e0bee) |

### What Was Built

| Milestone | Layer | Technology |
|-----------|-------|------------|
| Milestone 3 | Backend REST API | Express.js, TypeScript, MySQL, Node.js |
| Milestone 4 | Angular Frontend | Angular 17, TypeScript, Bootstrap, HttpClient |
| Milestone 5 | React Frontend | React 18, Axios, CORS, MySQL via Express |

### Key Achievements

- Designed and implemented a **RESTful API** with full CRUD support (GET, POST, PUT, DELETE) over a MySQL database
- Built a complete **Angular 17** single-page application with component-based architecture and live data binding to the backend
- Migrated the frontend to **React 18**, refactoring all components to align with the database schema and resolving cross-origin, authentication, and compatibility issues
- Applied **Web Content Accessibility Guidelines (WCAG)** principles throughout — semantic HTML, keyboard navigation, ARIA roles, and sufficient color contrast — grounded in a Christian worldview of inclusive design
- Delivered three screencasts demonstrating each application working end-to-end

### Technical Challenges Overcome

Throughout the project, several real-world engineering challenges were encountered and resolved:

- **TypeScript configuration** for Express required careful `tsconfig.json` tuning
- **MySQL authentication** errors (`ER_ACCESS_DENIED`) resolved by correcting credentials and database name (`cst391`)
- **Angular HTTP proxy** (`proxy.conf.json`) not forwarding `/api` calls — fixed by using full direct URLs
- **HTTP 304 caching** blocking Angular `subscribe()` — resolved with cache-busting (`?t=Date.now()`)
- **CORS blocking** React (port 3001) from Express (port 3000) — fixed with `npm install cors` and `app.use(cors())`
- **Schema mismatch** between React components (using `productName/price`) and actual DB columns (`reference_number/sender_name`) — required full component refactor
- **PowerShell compatibility** on Windows — switched to `New-Item` and semicolons instead of bash-style commands

---

## Applications Built

### Milestone 3 — Backend REST API

**Stack:** Express.js · TypeScript · MySQL · Node.js · Postman

The backend API serves as the data layer for both frontend applications. It exposes five REST endpoints for managing consignment records stored in a MySQL database.

| Method | Endpoint | Action |
|--------|----------|--------|
| GET | `/api/consignments` | List all consignments |
| GET | `/api/consignments/:id` | Get one consignment |
| POST | `/api/consignments` | Create new consignment |
| PUT | `/api/consignments/:id` | Update consignment |
| DELETE | `/api/consignments/:id` | Delete consignment |

**Lessons Learned:**
- Modular backend architecture significantly improves maintainability
- Postman is invaluable for isolating and debugging API behavior before wiring to a frontend
- Always verify database state after each write operation to ensure response accuracy
- Clear separation of route handlers, DB logic, and middleware simplifies debugging

---

### Milestone 4 — Angular Frontend

**Stack:** Angular 17 · TypeScript · Bootstrap · Angular HttpClient · Node.js / Express · MySQL 8

The Angular application delivers a complete CRUD interface for the Samopel Logistics system, featuring five Angular components and three REST endpoints.

**Components:**
- `ConsignmentListComponent` — paginated list with color-coded status badges
- `ConsignmentDetailComponent` — full record view triggered by "View" button
- `ConsignmentFormComponent` — shared form for Create and Update
- `ConsignmentDeleteComponent` — confirmation dialog with instant list refresh
- `AppComponent` — root shell with navigation

**Lessons Learned:**
- `ChangeDetectorRef.detectChanges()` is essential when Angular's change detection doesn't trigger after navigation
- HTTP 304 caching can silently break reactive streams — cache-busting is a reliable fix
- Missing database columns surface as cryptic 500 errors; always validate schema before wiring POST routes

---

### Milestone 5 — React Frontend

**Stack:** React 18 · Axios · Express.js · MySQL · CORS

The React application mirrors the Angular CRUD functionality but adopts a hooks-based, functional component model. It runs on `localhost:3001` and communicates with the same Express/MySQL backend on `localhost:3000`.

**Three-Tier Architecture:**

```
PRESENTATION LAYER       API LAYER              DATA LAYER
React 18 (port 3001)  →  Express.js (port 3000) → MySQL (port 3306)
NavBar, List, Detail,    GET/POST/PUT/DELETE        Database: cst391
Form, Axios              /api/consignments          Table: consignments
                         CORS enabled
```

**Lessons Learned:**
- CORS must be explicitly configured when running frontend and backend on different ports
- Schema mismatches between component expectations and actual DB columns require full refactoring — plan schema early
- PowerShell requires different syntax than bash; cross-platform scripts need conditional logic

---

## Christian Worldview & Web Accessibility

> *"Love your neighbor as yourself."* — Mark 12:31

As developers, we serve people made in the image of God (*Imago Dei*). Building accessible applications is not simply a technical checkbox — it is a moral responsibility to ensure all users, regardless of physical or cognitive ability, can access the products we build.

### What Accessibility Means for UX

Accessible UX ensures users with visual, motor, auditory, or cognitive disabilities can fully navigate, understand, and interact with web applications. Inaccessibility does not just create friction — it excludes people entirely, which is incompatible with a Christian ethic of neighbor-love.

### Best Practices Applied

| Practice | Implementation |
|----------|---------------|
| **Semantic HTML** | Used `<nav>`, `<main>`, `<button>`, `<form>` so screen readers interpret content correctly |
| **Color Contrast** | Maintained WCAG AA minimum ratio (4.5:1) — critical for the dark-themed Samopel app |
| **Keyboard Navigation** | All features operable via keyboard alone, supporting motor-impaired users |
| **Alt Text on Images** | Every image includes descriptive `alt` attributes for visually impaired users |
| **ARIA Roles** | ARIA labels applied to interactive elements without native semantics |
| **Focus Management** | Visible focus indicators preserved; no `:focus { outline: none }` overrides |

### Developer Responsibility

When we become web developers, we inherit a duty of care to every person who interacts with our work. A Christian worldview amplifies this: accessibility is not a feature to be toggled — it is a baseline expression of human dignity. Designing for the margins (disability, low bandwidth, older devices) produces better experiences for everyone.

---

## Screencast Demonstrations

The following screencasts provide full technical walk-throughs of each application working end-to-end, presented in a professional job-interview format:

| Milestone | Description | Link |
|-----------|-------------|------|
| **Milestone 3** | Backend REST API — Express, TypeScript, MySQL | [▶ Watch on Loom](https://www.loom.com/share/4881f7204bd44edc825e1d1ff3c4eaa8) |
| **Milestone 4** | Angular Frontend — Full CRUD Application | [▶ Watch on Loom](https://www.loom.com/share/4abc7e14aed8422a8ea67860b1c4148b) |
| **Milestone 5** | React Frontend — Migration & CRUD | [▶ Watch on Loom](https://www.loom.com/share/222933a5ae5f478ba754aa7cad496c08) |

---

## Presentation

The full benchmark presentation (PowerPoint) consolidating Milestones 3, 4, and 5 is included in this repository:

📎 **[Download Presentation](./assets/Milestone6_Final_Presentation.pptx)**

### Slide Overview

| Slide(s) | Section |
|----------|---------|
| 1 | Title — Samopel Logistics Hub, Final Benchmark |
| 2 | Agenda — M3, M4, M5 Overview |
| 3–6 | Milestone 3: Overview, Scope, Challenges, Lessons Learned |
| 7–10 | Milestone 4: Angular App, CRUD Operations, Challenges & Lessons |
| 11–13 | Milestone 5: React App Architecture, Challenges & Lessons |
| 14 | Web Accessibility & Christian Worldview |
| 15 | Conclusion — Project Complete |
| 16 | Screencast Demos — All Milestone Loom Links |

### Embedded Preview



---

## Competency Demonstrated

This benchmark assignment assesses:

**BS Software Development — Competency 2.3**
> *Demonstrate programming skills to design and build web application / database-driven and distributed information systems.*

**Evidence of Competency:**

- ✅ Designed and built a RESTful API with MySQL database integration (Milestone 3)
- ✅ Built a database-driven Angular SPA with full CRUD (Milestone 4)
- ✅ Migrated to React, demonstrating cross-framework competency (Milestone 5)
- ✅ Implemented CORS, authentication, and schema management across distributed services
- ✅ Applied accessibility best practices from a Christian worldview perspective
- ✅ Delivered professional screencasts demonstrating end-to-end application functionality

---

## Project Structure

```
Milestone6/
├── README.md                          # This file — Overview & Executive Summary
├── assets/
│   └── Milestone6_FinalPresentation.pptx   # Final consolidated presentation
└── docs/
    └── (additional documentation)
```

---

*CST391 — JavaScript Web Application Development | Grand Canyon University | March 2026*
*Oluwaseun Akerele*
