/**
 * Users routes
 *
 * Handle all routes connected with users
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
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const keys = require("../config/keys.dev");
const tokenFormatter = require("../helpers/token-formatter");
const multer = require("multer");
const multerCfg = require("../config/multer");
const User = require("../models/User");
const pwValidator = require("../helpers/pw-validator");

/**
 * RESET PASSWORD
 *
 * @route   api/users/resetPassword
 * @method  POST
 * @headers {
 *   'Content-Type':  'application/json'
 * }
 * @body {
 *    email:                {String}
 *    new_password:         {String}
 *    new_passwordConfirm:  {String}
 *    secret_question:      {String}
 *    secret_answer:        {String}
 * }
 */
router.post("/resetPassword", (req, res, next) => {
  const { email, new_password, secret_question, secret_answer } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) return next({ message: "User not found" });
    if (
      secret_question !== user.secret_question ||
      secret_answer !== user.secret_answer
    )
      return next({ message: "Secret Question and/or Answer is invalid" });

    bcrypt
      .compare(new_password, user.password)
      .then(isMatch => {
        if (isMatch)
          return next({
            message: "You cannot change password to the previous value"
          });
      })
      .catch(err => next(err));

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(new_password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        user
          .save()
          .then(user =>
            res.json({
              success: true,
              message: `Password successfully updated`
            })
          )
          .catch(err => next(err));
      });
    });
  });
});

/**
 * AUTHENTICATE
 *
 * @route   api/users/authenticate
 * @method  POST
 * @headers {
 *   'Content-Type':  'application/json',
 *   'Authorization': '<access_token>'
 * }
 */
router.post("/authenticate", (req, res, next) => {
  const token = tokenFormatter(req.headers.authorization);
  jwt.verify(token, keys.jwtKey, (err, decoded) => {
    if (err) return next({ message: "You are not authorized" });
    User.findById(decoded.id, (err, user) => {
      if (err) return next(err);
      const responseData = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        avatar: user.avatar,
        registerDate: user.registerDate,
        role: user.role,
        _id: user._id,
        verified: user.verified,
        locked: user.locked
      };
      return res.json({
        success: true,
        message: `Logged in as ${user.first_name} ${user.last_name}`,
        data: responseData
      });
    });
  });
});

/**
 * LOGIN
 *
 * @route   api/users/login
 * @method  POST
 * @headers {
 *   'Content-Type': 'application/json'
 * }
 * @body {
 *   email:    {String}
 *   password: {String}
 * }
 */
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) return next({ message: "User not found" });
    bcrypt
      .compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) return next({ message: "Invalid Password" });
        const payload = {
          id: user._id,
          name: user.name
        };
        jwt.sign(payload, keys.jwtKey, (err, token) => {
          return res.json({
            success: true,
            message: `Logged in as ${user.first_name} ${user.last_name}`,
            token: `Bearer ${token}`,
            data: {
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              avatar: user.avatar,
              registerDate: user.registerDate,
              role: user.role,
              _id: user._id,
              verified: user.verified,
              locked: user.locked
            }
          });
        });
      })
      .catch(err => next(err));
  });
});

/**
 * REGISTER
 *
 * @route   api/users/register
 * @method  POST
 * @headers {
 *   'Content-Type': 'application/json'
 * }
 * @body {
 *   first_name:       {String}
 *   last_name:        {String}
 *   email:            {String}
 *   password:         {String}
 *   confirm_password: {String}
 *   secret_question:  {String}
 *   secret_answer:    {String}
 * }
 */
router.post("/register", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) return next({ message: "User already exists" });
      const isPasswordValid = pwValidator(password);
      if (isPasswordValid !== "") return next({ message: isPasswordValid });
      const newUser = new User(req.body);
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) return next(err);
          newUser.password = hash;
          newUser
            .save()
            .then(user =>
              res.json({
                success: true,
                message: `User successfully created`
              })
            )
            .catch(err => next(err));
        });
      });
    })
    .catch(err => next(err));
});

/**
 * UPDATE
 *
 * @route   api/users/update
 * @method  PATCH
 * @headers {
 *   'Content-Type': 'multipart/form-data',
 *   'Authorization': '<access_token>'
 * }
 * @body {
 *   _id:             {String} - MANDATORY (request will fail without it)
 *   first_name:      {String},
 *   last_name:       {String},
 *   password:        {String},
 *   email:           {String},
 *   secretQuestion:  {String},
 *   secretAnswer:    {String},
 *   registerDate:    {Date},
 *   role:            {String},
 *   avatar:          {File/String},
 * }
 */
router.patch("/update", (req, res, next) => {
  const token = tokenFormatter(req.headers.authorization);
  jwt.verify(token, keys.jwtKey, err => {
    if (err) return next({ message: "You are not authorized" });
    const upload = multer({ storage: multerCfg.storage }).single("avatar");
    // Parse form-data object
    upload(req, res, err => {
      if (err) return next(err);
      // Avatar is saved as an url string
      // If a new avatar is being sent trigger cloudinary api
      // and retrieve new avatar url after successful upload
      if (req.file) {
        const path = req.file.path;
        cloudinary.v2.uploader.upload(
          path,
          multerCfg.options(req.body._id),
          (err, image) => multerCfg.callback(err, image, req, res, path, next)
        );
      } else {
        User.findById(req.body._id, (err, user) => {
          if (err) return next(err);
          Object.assign(user, req.body);
          user.save(err => {
            if (err) return next(err);
            return res.json({
              success: true,
              message: `User ${user.name} successfully updated`
            });
          });
        });
      }
    });
  });
});

/**
 * CHANGE PASSWORD
 *
 * @route   api/users/changepassword
 * @method  PATCH
 * @headers {
 *   'Content-Type': 'application/json',
 *   'Authorization': '<access_token>'
 * }
 * @body {
 *   _id:                {String} - MANDATORY (request will fail without it)
 *   password:           {String},
 *   newPassword:        {String},
 *   newPasswordConfirm: {String},
 *   email:              {String},
 *   secretQuestion:     {String},
 *   secretAnswer:       {String},
 * }
 */
router.patch("/changepassword", (req, res, next) => {
  const token = tokenFormatter(req.headers.authorization);
  jwt.verify(token, keys.jwtKey, err => {
    const {
      _id,
      email,
      password,
      newPassword,
      newPasswordConfirm,
      secretQuestion,
      secretAnswer
    } = req.body;
    if (err) return next({ message: "You are not authorized" });
    User.findById(_id, (err, user) => {
      if (err) return next(err);
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) return next({ message: "Invalid Password" });
        if (email !== user.email)
          return next({ message: "Entered email doesn't match" });
        if (
          secretQuestion !== user.secretQuestion ||
          secretAnswer !== user.secretAnswer
        )
          return next({ message: "Secret Question and/or Answer are invalid" });
        const isPasswordValid = pwValidator(newPassword);
        if (isPasswordValid !== "") return next({ message: isPasswordValid });
        if (newPassword !== newPasswordConfirm)
          return next({
            message: "New Password and New Password Confirm do not match"
          });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            user
              .save()
              .then(() =>
                res.json({
                  success: true,
                  message: "Password successfully updated."
                })
              )
              .catch(err => next(err));
          });
        });
      });
    });
  });
});

module.exports = router;
