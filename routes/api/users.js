const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("./auth");

// Item model
const User = require("../../models/User");

// Create routes
// @route post api/users
// @desc Register new user
// @access Public

router.post("/", (req, res) => {
  const {
    name,
    surname,
    username,
    email,
    password,
    confirm_password,
  } = req.body;

  // Validation
  if (
    !name ||
    !surname ||
    !username ||
    !email ||
    !password ||
    !confirm_password
  ) {
    return res.status(400).json("Please enter all fields");
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      surname,
      username,
      email,
      password,
      confirm_password,
    });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;

              res.json({
                success: true,
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
