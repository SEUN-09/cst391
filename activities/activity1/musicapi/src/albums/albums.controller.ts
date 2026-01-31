import { Request, Response } from "express";
import { getAlbums } from "./albums.dao";

export const readAlbums = (req: Request, res: Response) => {
  getAlbums((err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(data);
  });
};
