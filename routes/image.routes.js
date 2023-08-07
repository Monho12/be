const express = require("express");
const {
  getImage,
  getImages,
  postImage,
} = require("../controllers/image.controller");

const router = express.Router();

router
  .get("/image/:id", getImage)
  .get("/images", getImages)
  .post("/image", postImage);

module.exports.imageRoutes = router;
