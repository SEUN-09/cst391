import express from "express";
import dotenv from "dotenv";
import "./services/mysql.connector";

import albumsRouter from "./albums/albums.routes";
import artistsRouter from "./artists/artists.routes";
import { logger } from "./middleware/logger.middleware";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(logger);

// routes
app.use("/", [albumsRouter, artistsRouter]);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
