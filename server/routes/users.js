/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// const express = require('express');
// const router  = express.Router();

// router.get('/', (req, res) => {
//   res.render('users');
// });

// module.exports = router;

const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const userQueries = require("../db/queries/users");

const router = express.Router();

const cookieSession = require("cookie-session");

router.use(
  cookieSession({
    name: "session",
    keys: ["fasdklfhaklsdhfklas"],
  })
);
router.use(express.json());
router.use(express.urlencoded({ extended: true })); // creates req.body

// Create a new user
router.post("/signUp", (req, res) => {
  const { name, email, password } = req.body;

  userQueries
    .getUserByEmail(email)
    .then((existingUser) => {
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      // If email doesn't exist, hash the password and add the user
      const hashedPassword = bcrypt.hashSync(password, 12);
      return userQueries.addUser({ name, email, password: hashedPassword });
    })
    .then((addedUser) => {
      if (!addedUser) {
        return res.status(500).json({ error: "Error creating user" });
      }
      req.session.userId = addedUser.id;
      // res.status(201).json({ message: "User created successfully" });
      res
        .status(201)
        .json({ user: { name: name, email: email, password: password } });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// Log a user in
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  userQueries
    .getUserByEmail(email)
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      return bcrypt.compare(password, user.password).then((isPasswordValid) => {
        if (!isPasswordValid) {
          return res.status(401).json({ error: "Invalid password" });
        }

        req.session.userId = user.id;

        return res.status(200).json({
          user: {
            name: user.full_name,
            email: user.email,
            id: user.id,
          },
        });
      });
    })
    .catch((error) => {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Log a user out
// router.post("/logout", (req, res) => {
//   req.session.userId = null;
//   // res.status(200).json({ message: "Logout successful" });
// });

// router.get("/", (req, res) => {
//   const email = req.session.userEmail;

//   userQueries
//     .getUsers()
//     .then((users) => {
//       res.json({ users });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

module.exports = router;
