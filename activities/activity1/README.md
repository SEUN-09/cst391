# Activity 1 – Express MVC Music API (TypeScript)

## Overview
This activity implements a RESTful Music API using the Express framework and TypeScript.  
The project follows the MVC (Model–View–Controller) architectural pattern and separates concerns using routers, controllers, and DAO layers.

The API exposes endpoints for managing music-related data such as albums and artists.

---

## Technologies Used
- Node.js
- Express
- TypeScript
- MySQL
- dotenv
- Postman (for testing)

---

## Project Structure
musicapi/
├── src/
│ ├── albums/
│ │ ├── albums.routes.ts
│ │ ├── albums.controller.ts
│ │ ├── albums.dao.ts
│ │ └── albums.queries.ts
│ ├── artists/
│ │ ├── artists.routes.ts
│ │ ├── artists.controller.ts
│ │ ├── artists.dao.ts
│ │ └── artists.queries.ts
│ ├── middleware/
│ │ └── logger.middleware.ts
│ ├── services/
│ │ └── mysql.connector.ts
│ └── app.ts
├── package.json
├── tsconfig.json
└── .env


---

## Required API Endpoints
The API includes all required endpoints defined in *MusicAPI-391 Topic 1*, including routes for albums and artists.

These endpoints are demonstrated in Postman during the screencast.

---

## MVC Flow Example (Albums – GET)
One API method demonstrated in detail during the screencast is the **GET /albums** endpoint.

### Router
The router defines the endpoint and maps it to the controller method.
```ts
router.get("/albums", AlbumsController.readAlbums);

## Controller
export const readAlbums = (req: Request, res: Response) => {
  getAlbums((err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(data);
  });
};

## DAO 
The DAO interacts directly with the database and executes the SQL query.
export const getAlbums = (callback: Function) => {
  db.query(AlbumQueries.getAll, callback);
};

## Running the Application
1. Install dependencies:
  npm install
2. Configure database credentials in .env

3. Start the server:  npm run start

4. The server runs on port 5000 

API Endpoints
Get All Albums

Method: GET

URL: http://localhost:5000/albums

Get All Artists

Method: GET

URL: http://localhost:5000/artists

Postman Demonstration

Postman was used to send HTTP GET requests to each endpoint. The JSON responses confirm successful routing through the router, controller, and DAO layers.

MVC Breakdown (Example: Albums)

Router: albums.routes.ts defines the /albums endpoint.

Controller: albums.controller.ts processes requests and responses.

DAO: albums.dao.ts handles data retrieval.

## Screencast Demonstration

A screencast demonstrating the MusicAPI endpoints using Postman can be viewed here:

[Click here to watch the screencast]https://www.loom.com/share/0d0864dc4d16448db30efb08483afd45



