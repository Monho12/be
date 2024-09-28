const { Schema, model } = require("mongoose");

const albumSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Artist: {
    type: String,
    required: true,
  },
  Spotify: {
    type: String,
    required: true,
  },

  Url: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Album = model("Album", albumSchema);

module.exports.Album = Album;
