require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const { imageRoutes } = require("./routes/image.routes");

const port = process.env.PORT || 7000;

const app = express();

connect();

app.use(cors());
app.use(express.json());

app.use(imageRoutes);

app.get("/", (_req, res) => {
  res.send("GOODBYE WORLD!");
});

app.listen(port, () => console.log(`App listening on ${port}`));
