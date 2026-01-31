import { Router } from "express";
import * as AlbumsController from "./albums.controller";

const router = Router();

router.get("/albums", AlbumsController.readAlbums);

export default router;

