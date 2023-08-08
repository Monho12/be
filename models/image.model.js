const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  Url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Image = model("Image", imageSchema);

module.exports.Image = Image;
