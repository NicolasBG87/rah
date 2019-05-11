// Multer storage config
const User = require("../models/User");
const Auction = require("../models/Auction");
const multer = require("multer");

module.exports = {
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  }),
  /**
   * Multer upload options
   *
   * @param {String} id
   * @returns {{format: string, public_id: string}}
   */
  options: id => {
    return {
      public_id: id,
      format: "png"
    };
  },
  /**
   * Cloudinary upload callback
   *
   * @param {Error} err
   * @param {File} image
   * @param {Request} req
   * @param {Response} res
   * @param {String} path
   * @param {Function} next
   * @returns {Response}
   */
  callback: (err, image, req, res, path, next) => {
    if (err) return res.send(err);
    const fs = require("fs");
    // Remove file from storage
    fs.unlinkSync(path);
    User.findById(req.body._id, (err, user) => {
      if (err) next(err);
      Object.assign(user, req.body);
      user.avatar = image.url;
      user.save(err => {
        if (err) next(err);
        res.json({
          success: true,
          message: `User successfully updated`
        });
      });
    });
  },
  multifile: (err, images, req, res, path, next) => {
    if (err) return res.send(err);
    const fs = require("fs");
    // Remove file from storage
    fs.unlinkSync(path);
    const auction = new Auction(req.body);
    auction.images = [];
    user.save(err => {
      if (err) next(err);
      res.json({
        success: true,
        message: `User successfully updated`
      });
    });
  }
};
