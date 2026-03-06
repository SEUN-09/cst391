# CST-391 Activity 4  
## Music Application – Integration with Back End

---

## Overview

Activity 4 completes the Music Application by integrating the Angular front-end with a live back-end service. In this activity, the application is refactored to remove hard-coded data and instead retrieve real data from an Express Music API using Angular’s `HttpClient`.

The goal of this activity is to demonstrate asynchronous communication between a client-side Angular application and a server-side API, following modern Angular development practices.

---

## Executive Summary

In this activity, the Music Application was enhanced by replacing static, in-memory data with live API calls to an Express MusicAPI running on port 5000. Angular’s `HttpClient` was configured and used to retrieve artists, albums, and album details asynchronously.

Service methods were refactored to use callback functions, and all calling components were updated to handle asynchronous responses correctly. This approach reflects real-world front-end and back-end integration patterns and reinforces the concepts of asynchronous programming, Observables, and separation of concerns.

---

## Application Architecture

The solution consists of two main components:

### Front End
- Angular standalone application
- Runs on a local development port (e.g., 4200 or dynamically assigned)
- Handles UI rendering, routing, and user interaction

### Back End
- Express Music API
- Runs on `http://localhost:5000`
- Provides REST endpoints for artists and albums

The Angular application communicates with the Express API via HTTP requests using `HttpClient`.

---

## Technologies Used

- Angular (Standalone Components)
- TypeScript
- Express.js
- Node.js
- HTML / CSS
- RESTful APIs
- Angular HttpClient
- Observables and Callbacks

---

## HTTP Client Integration

The Angular application was updated to include HTTP support by configuring the `HttpClient` provider. All service methods were refactored to retrieve data asynchronously from the Express API rather than returning static arrays.

Key changes include:
- Injection of `HttpClient` into the music service
- Removal of hard-coded sample data
- Introduction of callback-based method signatures
- Incremental testing of each updated method

---

## Asynchronous Data Handling

Angular’s `HttpClient` is built around Observables. While Promises resolve once, Observables allow subscriptions to handle asynchronous data streams. In this application, each HTTP request automatically completes after returning data, preventing resource leaks.

Callback methods were used to pass retrieved data back to components once HTTP responses were received. This required updating all consuming components to work asynchronously rather than synchronously.

---

## Features Implemented

- View list of artists retrieved from the API
- Select an artist to view associated albums
- View album details including tracks
- Add new albums using live API calls
- Edit existing album information
- Display updated data without reloading the application

---

## How to Run the Application

### Start the Express Music API
1. Navigate to the `music-api` directory
2. Install dependencies:
   ```bash
   npm install
 ```  
3. Install dependencies:
     npm install

4. Start the application:

   ng serve  

 5.    Open the application using the local URL provided in the terminal (for example):

http://localhost:4200 
```
## Testing and Validation

The application was tested incrementally as each service method was refactored from hard-coded data to live API calls. Express API endpoints were first validated directly in the browser to confirm correct responses before being consumed by the Angular application.

Console logging was used during development to verify successful data flow between the Express API, the Angular service layer, and UI components. This ensured that asynchronous callbacks were functioning correctly and that data binding updated the user interface as expected.

## Screenshots
**Album Details API Response**

![Album Details API Response](./screenshots/Album%20Details%20API%20Response.png)

This screenshot shows the Express API returning album details in JSON format.

**Artists API Response**

![Artists API Response](./screenshots/Artists-API-Response.png)

This screenshot shows the Express API returning the list of artists in JSON format.

**Main Application Screen**

![Main Application Screen](./screenshots/Main-Application-Screen.png)

This screenshot shows the initial Angular application layout with the navigation bar before any artist is selected.

**Artist List Screen**

![Artist List Screen](./screenshots/Artist-List-Screen.png)

This screenshot shows the list of artists retrieved from the Express API and displayed in the Angular application.

**Album List Screen**

![Album List Screen](./screenshots/Album-List-Screen.png)

This screenshot shows the albums displayed after selecting an artist from the list.

**Add Album Screen**

![Add Album Screen](./screenshots/Add-Album-Screen.png)

This screenshot shows the form used to create a new album and submit it to the Express API.

## Artist List and Albums

![Artist List with Edit and Delete Actions](./screenshots/artist-list-albums-edit-delete.png)

This screen displays artists and their albums, with edit and delete buttons available for managing each album.

## Conclusion

Activity 4 reinforced the practical use of Angular components, services, and routing to build a functional, data driven web application. Through this activity, the application successfully displayed artists and their albums, responded to user selections, and supported album editing and deletion actions.

The activity highlighted the importance of proper component communication, consistent data models, and service based API interaction. It also demonstrated how Angular manages application state and dynamically updates the user interface without page reloads.

Overall, this activity strengthened understanding of Angular’s architecture, especially the separation of concerns between the user interface, business logic, and data services, while emphasizing best practices for building maintainable and scalable web applications.


## Maintaining Logged In State in an Angular Application

An Angular application maintains a logged in state primarily through **client side storage and authentication tokens**. After a user successfully logs in, the server typically returns a **JSON Web Token (JWT)** or a session identifier. Angular stores this token in **localStorage**, **sessionStorage**, or memory, depending on the security requirements of the application.

To keep track of the logged in state across pages and refreshes, Angular often uses an **authentication service**. This service exposes methods such as `isLoggedIn()` and holds the current authentication state. Route protection is handled using **Route Guards**, which prevent unauthorized users from accessing protected routes.

Communication with the server happens through **HTTP requests** using Angular’s `HttpClient`. The stored token is attached to each request, usually in the **Authorization header**, via an **HTTP Interceptor**. This allows the server to verify the user’s identity on every request without requiring repeated logins.

On the server side, the token is validated to confirm authenticity and permissions. If the token is expired or invalid, the server responds with an error, and Angular updates the client state by logging the user out.

This approach provides a secure, scalable, and stateless way to manage authentication in modern Angular applications.