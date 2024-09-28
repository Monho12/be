const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./config/db");

const { imageRoutes } = require("./routes/image.routes");
const { AlbumRoutes } = require("./routes/album.routes");

const port = process.env.PORT;

connect();

const app = express();

app.use(cors());
app.use(express.json());

app.use(imageRoutes);
app.use(AlbumRoutes);

app.get("/", (_req, res) => {
  res.send("GOODBYE WORLD!");
});

app.listen(port, () => console.log(`App listening on ${port}`));
