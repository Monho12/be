const express = require("express");
const {
  getAlbum,
  getAlbums,
  postAlbum,
  deleteAlbum,
} = require("../controllers/album.controller");

const router = express.Router();

router
  .get("/albums", getAlbums)
  .get("/album/:id", getAlbum)
  .post("/album", postAlbum)
  .delete("/album/:id", deleteAlbum);

module.exports.AlbumRoutes = router;
