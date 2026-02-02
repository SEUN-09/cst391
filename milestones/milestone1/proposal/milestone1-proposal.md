## Introduction

Samopel Logistics Dispatch Hub is a simple logistics web application that helps Samopel Logistic LLC track and manage delivery consignments from pickup to drop off.

The same application will be built twice on the front end. One version in Angular and another version in React. Both front ends will connect to one Express API that talks to a MySQL database.

The main item being managed is the product. In this project, a product means a consignment record that has a tracking code and shipping details. The app supports full CRUD so staff can list, create, read, update, and delete consignments.

## Functionality Requirements in User Story Format

1. As a dispatcher, I want to create a new consignment so I can register a package for delivery.

2. As a dispatcher, I want to view a list of consignments so I can quickly see what is pending, in     transit, or delivered.

3. As a dispatcher, I want to open a consignment details page so I can see all delivery information in one place.

4. As a dispatcher, I want to edit a consignment so I can correct destination details or update the status.

5. As a dispatcher, I want to delete a consignment so I can remove test records or duplicates.

6. As a dispatcher, I want to search consignments by tracking code so I can find a specific record fast.

7. As a dispatcher, I want to filter by status so I can focus on pending or in transit work.

8. As a dispatcher, I want to assign a driver to a consignment so I can track responsibility.

9. As a dispatcher, I want to mark a delivery date so I can record when drop off happened.

# SAMOPEL LOGISTICS DISPATCH HUB  
## CST 391 MILESTONE 1 PROJECT PROPOSAL

---

## INITIAL DATABASE DESIGN

The application uses a relational MySQL database to store logistics data for Samopel Logistics LLC.

The core entity is **Product**, which represents a consignment being shipped through the logistics system.

The Product table uses multiple data types including:

- INT  
- VARCHAR  
- DECIMAL  
- DATE  
- DATETIME  

The database design is intentionally simple to support CRUD operations while allowing room for future expansion.

**milestones/milestone1/doc/diagrams/er-diagram.png**


---

## DATABASE DESIGN NOTES

- The `status` field represents the delivery state and may contain values such as Pending, In Transit, Delivered, or Cancelled.  
- The `deliveredAt` field remains empty until the consignment status is marked as Delivered.  
- The `trackingCode` field is unique and serves as the primary search key for dispatchers.

---

## INITIAL UI SITEMAP

The UI sitemap defines the logical navigation flow of the application.

Both the Angular and React implementations will follow the same sitemap structure to ensure consistency across platforms.

The sitemap outlines navigation between the home page, consignment management, driver management, and customer management sections.

**milestones/milestone1/doc/diagrams/sitemap.png**


---

## INITIAL UI WIREFRAMES

Low fidelity wireframes were created to demonstrate page layout and user interaction flow.

The wireframes focus on structure and usability rather than final visual styling.

Included screens:

- Consignment List  
- Create or Edit Consignment  
- Consignment Details  

**milestones/milestone1/doc/wireframes/consignment-list.png**
**milestones/milestone1/doc/wireframes/consignment-form.png**
**milestones/milestone1/doc/wireframes/consignment-details.png**


---

## INITIAL UML CLASS DESIGN

The UML class design focuses on the backend Express API architecture.

It illustrates separation of responsibilities between controllers, services, data access objects, and database connections.

This structure allows both Angular and React front end applications to interact with the same REST API.

**milestones/milestone1/doc/uml/backend-uml.png**


---

## REST API ENDPOINTS

The Express API exposes RESTful endpoints to support full CRUD operations for consignments.

GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id

---

## RISKS AND UNKNOWNS

**Environment Setup Risk**  
NodeJS, Angular CLI, React tooling, and MySQL configuration may introduce setup delays.

**Database Connection Risk**  
Authentication and connection string issues can affect backend development.

**Scope Control Risk**  
Logistics systems can expand quickly, so development will remain focused on core CRUD features.

**Dual Front End Risk**  
Maintaining both Angular and React clients may require additional coordination.

**Data Validation Risk**  
Weak validation may result in inconsistent or invalid database records.

---

## SUMMARY

Samopel Logistics Dispatch Hub meets all Milestone 1 requirements by providing:

- A product data model using multiple MySQL data types  
- An Express and NodeJS REST API design  
- Two planned front end implementations using Angular and React  
- Complete design documentation including ER diagrams, UI sitemap, wireframes, and UML class diagrams  

All technical artifacts are organized in dedicated documentation folders and referenced within this proposal.








