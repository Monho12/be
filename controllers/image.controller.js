const { Image } = require("../models/image.model");

exports.getImages = async (_req, res) => {
  try {
    const result = await Image.find({});
    res.send(result);
  } catch (err) {
    res.send("aldaa garlaa");
  }
};

exports.getImage = async (req, res) => {
  try {
    const result = await Image.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.postImage = async (req, res) => {
  const { Url } = req.body;
  try {
    const result = await new Image({
      Url,
    }).save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
