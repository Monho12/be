const express = require("express");
const {
  getImage,
  getImages,
  postImage,
  deleteImage,
} = require("../controllers/image.controller");

const router = express.Router();

router
  .get("/images", getImages)
  .get("/image/:id", getImage)
  .post("/image", postImage)
  .delete("/image/:id", deleteImage);

module.exports.imageRoutes = router;
