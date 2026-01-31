import { connection } from "../services/mysql.connector";
import { GET_ALBUMS } from "./albums.queries";

export const getAlbums = (callback: Function) => {
  connection.query(GET_ALBUMS, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
};
