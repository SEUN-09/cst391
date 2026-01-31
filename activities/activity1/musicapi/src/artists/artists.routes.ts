import { Router } from "express";
import * as ArtistsController from "./artists.controller";

const router = Router();

router.get("/artists", ArtistsController.readArtists);

export default router;
