/**
 * Auction Model - MongoDB Schema
 * Predefine records for a collection
 *
 * @type {Schema|Mongoose}
 */
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

// Auction Schema
const AuctionSchema = new Schema(
  {
    _id: {
      type: Number
    },
    name: {
      type: String,
      minLength: [2, "First Name must be at least 2 characters long"],
      maxLength: [35, "First Name must be at most 35 characters long"],
      required: [true, "Auction Name is required"]
    },
    owner: {
      _id: String,
      username: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: 259200 }
    },
    bids: [
      {
        user: {
          type: Number
        },
        amount: {
          type: Number,
          default: 0
        }
      }
    ],
    buyout: {
      user: {
        type: Number
      },
      amount: {
        type: Number,
        default: 0
      }
    },
    price: {
      bid: {
        type: Number,
        default: 0
      },
      buyout: {
        type: Number,
        default: 0
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
  },
  { _id: false }
);

AuctionSchema.plugin(AutoIncrement);

module.exports = Auction = mongoose.model("auctions", AuctionSchema);
