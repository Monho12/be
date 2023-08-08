const express = require("express");
const {
  getImage,
  getImages,
  postImage,
} = require("../controllers/image.controller");

const router = express.Router();

router
  .get("/images", getImages)
  // .get("/image/:id", getImage)
  // .post("/image", postImage);

module.exports.imageRoutes = router;
