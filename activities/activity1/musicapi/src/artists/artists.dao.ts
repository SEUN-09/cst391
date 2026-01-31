import { connection } from "../services/mysql.connector";
import { GET_ARTISTS } from "./artists.queries";

export const getArtists = (callback: Function) => {
  connection.query(GET_ARTISTS, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
};
