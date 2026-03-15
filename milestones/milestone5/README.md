# Milestone 5 — Samopel Consignment Tracking System

**Student:** Oluwaseun Akerele  
 **Course:** CST391         
**Date:** March 2026

---

## Overview

This repository contains Milestone 5 of the Samopel Consignment Tracking System — a full-stack web application built for a logistics company to manage shipment records. This milestone introduces a **React front-end** integrated with the existing **Express/Node.js REST API** and **MySQL database** from Milestone 4.

The application supports full **CRUD operations** (Create, Read, Update, Delete) on consignment records, featuring a dark-themed UI consistent with the original Angular design from Milestone 4.

| Item | Detail |
|---|---|
| **Front-end** | React 18 (Create React App) |
| **Routing** | React Router v6 |
| **HTTP Client** | Axios |
| **Back-end** | Express.js + Node.js |
| **Database** | MySQL (cst391 schema) |
| **Ports** | React: 3001 · API: 3000 · MySQL: 3306 |

## 🎬 Screencast

[▶ Click to Watch Milestone 5 Demo](./screencast/The-screencast.mp4)
---

## Executive Summary

Milestone 5 transitions the presentation layer from Angular (Milestone 4) to React while preserving the full functionality, API design, and visual theme of the previous milestone. The development process involved:

- Scaffolding a new React application using Create React App
- Building four functional components: `NavBar`, `ConsignmentList`, `ConsignmentDetail`, and `ConsignmentForm`
- Creating a centralized `consignmentService.js` using Axios for all API communication
- Implementing React Router v6 for client-side navigation across five routes
- Resolving MySQL authentication issues and database schema alignment between the API and front-end
- Enabling CORS on the Express server to allow cross-origin requests from React

All CRUD operations were verified as functional. The app loads, creates, reads, updates, and deletes consignment records from the live MySQL database.

---

## System Architecture

### Three-Tier Architecture

```mermaid
graph TD
    A["🖥️ React App<br/>localhost:3001<br/>NavBar · List · Detail · Form"] -->|HTTP Axios Calls| B["⚙️ Express REST API<br/>localhost:3000<br/>GET · POST · PUT · DELETE"]
    B -->|MySQL Queries| C["🗄️ MySQL Database<br/>localhost:3306<br/>cst391.consignments"]

    style A fill:#1a1d2e,color:#f5a623,stroke:#f5a623
    style B fill:#1a1d2e,color:#2196f3,stroke:#2196f3
    style C fill:#1a1d2e,color:#4caf50,stroke:#4caf50
```

### React Component Tree

```mermaid
graph TD
    App["App.js<br/>(BrowserRouter + Routes)"]
    App --> NavBar["NavBar.js<br/>Navigation links"]
    App --> List["ConsignmentList.js<br/>GET /api/consignments"]
    App --> Detail["ConsignmentDetail.js<br/>GET /api/consignments/:id"]
    App --> FormNew["ConsignmentForm.js (Create)<br/>POST /api/consignments"]
    App --> FormEdit["ConsignmentForm.js (Edit)<br/>PUT /api/consignments/:id"]

    List -->|Axios| Service["consignmentService.js"]
    Detail -->|Axios| Service
    FormNew -->|Axios| Service
    FormEdit -->|Axios| Service

    Service -->|HTTP| API["Express API :3000"]

    style App fill:#1a1d2e,color:#fff,stroke:#f5a623
    style Service fill:#1a1d2e,color:#f5a623,stroke:#f5a623
    style API fill:#1a1d2e,color:#4caf50,stroke:#4caf50
```

### Routing Map

```mermaid
flowchart LR
    Root["/"] --> List["/consignments<br/>ConsignmentList"]
    List --> Detail["/consignments/:id<br/>ConsignmentDetail"]
    List --> New["/consignments/new<br/>ConsignmentForm - Create"]
    Detail --> Edit["/consignments/edit/:id<br/>ConsignmentForm - Edit"]

    style Root fill:#f5a623,color:#1a1d2e
    style List fill:#1a1d2e,color:#fff
    style Detail fill:#1a1d2e,color:#fff
    style New fill:#4caf50,color:#fff
    style Edit fill:#2196f3,color:#fff
```

### Database Schema

```mermaid
erDiagram
    CONSIGNMENTS {
        int id PK "AUTO_INCREMENT"
        varchar reference_number "NOT NULL"
        varchar sender_name
        varchar receiver_name
        varchar status "Pending/In Transit/Delivered"
        varchar delivery_address
        datetime created_at "DEFAULT NOW()"
    }
```

### REST API Flow

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant R as React :3001
    participant A as Express API :3000
    participant D as MySQL :3306

    U->>R: Visits /consignments
    R->>A: GET /api/consignments
    A->>D: SELECT * FROM consignments
    D-->>A: rows[]
    A-->>R: JSON array
    R-->>U: Renders table

    U->>R: Submits new consignment form
    R->>A: POST /api/consignments (JSON body)
    A->>D: INSERT INTO consignments
    D-->>A: insertId
    A-->>R: 201 Created + new record
    R-->>U: Navigates to list
```

---

## Application Screenshots

### Project File Structure

The milestone 5 folder contains two sub-projects: the Express API and the React front-end.

![Project Structure](./screenshots/structure.png)

*VS Code file explorer showing `milestone5/` with the `api/` and `consignment-react/src/` folders including `components/` and `services/`.*

---

### MySQL Database — Consignments Table

![MySQL Workbench](./screenshots/mysql.png)

*The `cst391.consignments` table in MySQL Workbench showing seed data with reference numbers REF-001 through REF-010. This is the live data source for the React app.*

---

### API Server Running

![API Running](./screenshots/api.png)

*`localhost:3000` returns "Cannot GET /" confirming the Express API server is live and running. The API only responds to `/api/consignments` routes, so this is expected and correct.*

---

### Consignment List — READ

![Consignment List](./screenshots/list.png)

*The main list view at `localhost:3001/consignments` displays all records from MySQL. Each row shows the reference number, sender, receiver, color-coded status badge (Delivered / In Transit / Pending), creation date, and View / Edit / Delete action buttons.*

---

### New Consignment Form — CREATE

![Create Form](./screenshots/create.png)

*The create form at `localhost:3001/consignments/new` allows the user to enter a reference number, sender name, receiver name, delivery address, and status. Submits via Axios POST to the Express API.*

---

### Newly Created Record — CREATE Result

![Newly Created](./screenshots/newly-created.png)

*After submitting the create form, the new consignment record appears in the list, confirming the POST request was successful and the database was updated.*

---

### Consignment Detail — READ Single Record

![Detail View](./screenshots/detail.png)

*The detail card at `localhost:3001/consignments/:id` shows all fields for a single consignment including the color-coded status badge, sender/receiver grid, delivery address, and action buttons for Edit and Delete.*

---

### Delete Confirmation — DELETE

![Deleting Process](./screenshots/deleting%20process.png)

*The delete operation triggers a browser confirmation dialog. On confirm, Axios sends a DELETE request to the API and the record is removed from the list instantly.*

---

### Record Marked for Deletion — DELETE Result

![To Be Deleted](./screenshots/this-to-be-deleted.png)

*Before and after state showing the targeted record being removed from the consignment list after the DELETE operation completes successfully.*

---

## Known Issues & Future Enhancements

| # | Issue / Enhancement | Severity | Status | Notes |
|---|---|---|---|---|
| 1 | Manual reference number entry | Medium | Open | No auto-generation or uniqueness check |
| 2 | No live form validation feedback | Medium | Open | Only HTML5 `required` attribute used |
| 3 | No user authentication | Low | Out of scope | All CRUD is publicly accessible |
| 4 | No pagination | Low | Open | All records load at once — may slow with large datasets |
| 5 | No search or filter | Low | Open | Users must scroll the full list to find records |
| 6 | No confirmation on edit navigation | Low | Open | Unsaved changes are lost without warning |
| 7 | `created_at` not set on update | Low | Open | PUT request does not refresh the timestamp |

---

## Lessons Learned

### 1. Schema Alignment Is Critical
The front-end field names must exactly match the database column names. The initial components used `productName`, `category`, and `price` — which were wrong for this project's schema (`reference_number`, `sender_name`, `receiver_name`). This caused silent CRUD failures that required a full component refactor.

**Takeaway:** Always inspect the actual database schema before writing front-end components.

---

### 2. CORS Must Be Enabled Before Testing
Running React on port 3001 and Express on port 3000 triggers browser CORS blocking by default. Adding `cors` middleware to the Express server must be one of the very first setup steps — not an afterthought when API calls start failing.

**Takeaway:** Add `app.use(cors())` immediately when building a split front-end/back-end project.

---

### 3. Development Environment Matters
Bash commands like `&&` and `touch` do not work in Windows PowerShell. This caused confusion during project setup. Switching to PowerShell-native equivalents (`;` separator and `New-Item`) resolved the issue.

**Takeaway:** Know your terminal. Always verify shell-specific syntax when following tutorials written for a different OS.

---

### 4. React's Component Model Aligns with Backend Thinking
React's modular, reusable component structure felt natural coming from a backend development perspective. The idea of a service layer (`consignmentService.js`) mirrors backend patterns like repository or service classes.

**Takeaway:** Front-end frameworks are more approachable for backend developers than expected — the mental models overlap significantly.

---

### 5. Understanding the Front-End Improves API Design
Seeing how Axios consumes each endpoint made the API design clearer. For example, understanding that the React form submits JSON directly shaped how the Express routes parse `req.body`.

**Takeaway:** Building the front-end and back-end in the same project — even sequentially — produces better API contracts.

---

### 6. Visual Consistency Reduces Migration Risk
Preserving the Milestone 4 dark theme and component structure in React reduced design decisions during migration. Having a clear visual reference accelerated development and made it easy to verify correctness.

**Takeaway:** Establish a UI baseline early. Consistent design across milestones makes iterative development faster and reduces QA scope.

---

## Conclusion

Milestone 5 successfully delivers a fully functional React front-end for the Samopel Consignment Tracking System. All five CRUD operations are implemented and verified against a live MySQL database through the Express REST API. The application preserves the dark theme, Samopel branding, and component structure established in Milestone 4, demonstrating that a front-end framework migration can be completed without disrupting the underlying API or data layer.

The primary challenges — MySQL credential errors, schema misalignment, CORS configuration, and PowerShell compatibility — were resolved systematically and each produced a concrete lesson applicable to future full-stack web development projects.

The codebase is structured cleanly with separated concerns: routing in `App.js`, UI in `components/`, and API communication in `services/`. This separation sets a strong foundation for Milestone 6 testing and the final benchmark presentation.

---

*Samopel Consignment Tracking System · CST391 · Oluwaseun Akerele · March 2026*
