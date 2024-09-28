const { Album } = require("../models/album.model");

exports.getAlbums = async (_req, res) => {
  try {
    const result = await Album.find({});
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.getAlbum = async (req, res) => {
  try {
    const result = await Album.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.postAlbum = async (req, res) => {
  const { Url, Name, Artist, Spotify } = req.body;
  try {
    const result = await new Album({
      Url,
      Name,
      Spotify,
      Artist,
    }).save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteAlbum = async (req, res) => {
  try {
    const result = await Album.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
