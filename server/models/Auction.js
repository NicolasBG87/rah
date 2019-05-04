/**
 * Auction Model - MongoDB Schema
 * Predefine records for a collection
 *
 * @type {Schema|Mongoose}
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Auction Schema
const AuctionSchema = new Schema({
  name: {
    type: String,
    minLength: [2, "First Name must be at least 2 characters long"],
    maxLength: [35, "First Name must be at most 35 characters long"],
    required: [true, "Auction Name is required"]
  },
  owner: {
    type: String,
    required: [true, "Owner's ID is required"]
  },
  expiresIn: {
    type: Number,
    default: 86400000
  },
  price: {
    bid: {
      type: Number,
      default: 0
    },
    buyout: {
      type: Number,
      default: 10
    }
  },
  images: [
    {
      type: String,
      default: "placeholder"
    }
  ],
  description: {
    type: String
  },
  watchers: [
    {
      type: Schema.Types.ObjectId
    }
  ]
});

module.exports = Auction = mongoose.model("auctions", AuctionSchema);
