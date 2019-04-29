/**
 * User Model - MongoDB Schema
 * Predefine records for a collection
 *
 * @type {Schema|Mongoose}
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

// User Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    minLength: [2, "First Name must be at least 2 characters long"],
    maxLength: [35, "First Name must be at most 35 characters long"],
    required: [true, "First Name is required"]
  },
  last_name: {
    type: String,
    minLength: [2, "Last Name must be at least 2 characters long"],
    maxLength: [35, "Last Name must be at most 35 characters long"],
    required: [true, "Last Name is required"]
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: value => validator.isEmail(value),
      message: "Not a valid email"
    },
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  secret_question: {
    type: String,
    enum: [
      "Second pet's name",
      "First car",
      "Elementary school",
      "Street you've grown in",
      "Mother's middle name"
    ],
    required: [true, "Secret Question is required"]
  },
  secret_answer: {
    type: String,
    required: [true, "Secret Answer is required"]
  },
  registerDate: {
    type: Date,
    default: Date.now()
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  avatar: {
    type: String,
    default: "placeholder"
  },
  verified: {
    type: Boolean,
    default: false
  },
  locked: {
    type: Boolean,
    default: false
  },
  balance: {
    type: Number,
    default: 0
  },
  auctions: {
    watching: {
      type: Number,
      default: 0
    },
    pending: {
      type: Number,
      default: 0
    },
    expired: {
      type: Number,
      default: 0
    }
  }
});

module.exports = User = mongoose.model("users", UserSchema);
