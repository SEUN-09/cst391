import { Request, Response } from "express";
import { getArtists } from "./artists.dao";

export const readArtists = (req: Request, res: Response) => {
  getArtists((err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(data);
  });
};

