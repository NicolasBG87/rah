/**
 * Auctions routes
 *
 * Handle all routes connected with auctions
 *
 * GLOBAL RESPONSE:
 * @response {
 *   success: {Boolean}
 *   message: {String}
 *   data:    {Object}
 * }
 *
 * @type {router}
 */
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../config/keys.dev");
const cloudinary = require("cloudinary");
const tokenFormatter = require("../helpers/token-formatter");
const multer = require("multer");
const multerCfg = require("../config/multer");
const upload = multer({ storage: multerCfg.storage }).array("images", 20);
const Auction = require("../models/Auction");
const User = require("../models/User");
const dataMapper = require("../helpers/data-mapper");

const SIZE = 10;
const PAGE_NO = 1;

/**
 * RETRIEVE AUCTION
 *
 * @route   api/auctions/getOne
 * @method  POST
 * @headers {
 *   'Content-Type':  'application/json',
 *   'Authorization': '<access_token>'
 * }
 */
router.post("/getOne", (req, res, next) => {
  const token = tokenFormatter(req.headers.authorization);
  const auctionId = req.body.id;
  jwt.verify(token, keys.jwtKey, (err, decoded) => {
    if (err) return next({ message: "You are not authorized" });
    Auction.findById(auctionId, (err, auction) => {
      if (err) return next(err);
      User.findById(auction.owner._id, (err, user) => {
        const responseData = auction.toObject();
        responseData.owner = dataMapper.mapSeller(user);
        return res.json({
          success: true,
          data: responseData
        });
      });
    });
  });
});

/**
 * RETRIEVE ALL AUCTIONS
 *
 * @route   api/auctions/all
 * @method  POST
 * @headers {
 *   'Content-Type':  'application/json',
 *   'Authorization': '<access_token>'
 * }
 */
router.post("/all", (req, res, next) => {
  const token = tokenFormatter(req.headers.authorization);
  const page_no = req.body.page_no || PAGE_NO;
  const query = {};

  if (page_no <= 0) {
    return next({ message: "Invalid page number" });
  }

  query.skip = SIZE * (page_no - 1);
  query.limit = SIZE;

  jwt.verify(token, keys.jwtKey, (err, decoded) => {
    if (err) return next({ message: "You are not authorized" });
    Auction.countDocuments().exec((err, count) => {
      if (err) return next(err);

      Auction.find({}, {}, query, (err, auctions) => {
        if (err) return next(err);

        const responseData = {
          count: count,
          auctions: auctions.map(auction => {
            return {
              id: auction._id,
              name: auction.name,
              owner: auction.owner,
              createdAt: auction.createdAt,
              price: auction.price,
              images: auction.images,
              watched: auction.watchers.reduce((acc, curr) => {
                if (curr._id === decoded.id) {
                  acc = true;
                }
                return acc;
              }, false)
            };
          })
        };

        return res.json({
          success: true,
          data: responseData
        });
      });
    });
  });
});

/**
 * UPLOAD IMAGES
 *
 * @route   api/auctions/upload_images
 * @method  POST
 * @headers {
 *   'Content-Type': 'application/json'
 *   'Authorization': '<access_token>'
 * }
 * @body {
 *   images:       {File[]}
 * }
 */
router.post("/upload_images", upload, async (req, res, next) => {
  const token = tokenFormatter(req.headers.authorization);

  jwt.verify(token, keys.jwtKey, async (err, decoded) => {
    if (err) return next({ message: "You are not authorized" });
    const filePaths = req.files.map(item => item.path);
    const uploadFolder = `${decoded.id}/${Date.now()}/`;

    let multipleUpload = new Promise(async (resolve, reject) => {
      let upload_len = filePaths.length;
      let upload_res = new Array();

      for (let i = 0; i <= upload_len + 1; i++) {
        let filePath = filePaths[i];
        await cloudinary.v2.uploader.upload(
          filePath,
          { folder: uploadFolder },
          (error, result) => {
            if (upload_res.length === upload_len) {
              /* resolve promise after upload is complete */
              resolve(upload_res);
            } else if (result) {
              /*push public_ids in an array */
              upload_res.push(result.url);
            } else if (error) {
              console.log(error);
              reject(error);
            }
          }
        );
      }
    })
      .then(result => result)
      .catch(error => error);

    /*waits until promise is resolved before sending back response to user*/
    let upload = await multipleUpload;
    res.json({ response: upload });
  });
});

/**
 * CREATE AUCTION
 *
 * @route   api/auctions/create
 * @method  POST
 * @headers {
 *   'Content-Type': 'application/json'
 *   'Authorization': '<access_token>'
 * }
 * @body {
 *   name:         {String}
 *   owner:        {Object}
 *   expiresIn:    {Date}
 *   price:        {Object}
 *   images:       {String[]}
 *   description:  {String}
 * }
 */
router.post("/create", (req, res, next) => {
  const token = tokenFormatter(req.headers.authorization);

  jwt.verify(token, keys.jwtKey, async (err, decoded) => {
    if (err) return next({ message: "You are not authorized" });
    const newAuction = new Auction(req.body);

    newAuction
      .save()
      .then(auction => {
        res.json({
          success: true,
          message: `Auction ${auction._id} successfully created`
        });
      })
      .catch(err => next(err));
  });
});

module.exports = router;
