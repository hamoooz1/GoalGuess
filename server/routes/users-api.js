/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const bcrypt = require("bcrypt");
// const app = express();
const userQueries = require("../db/queries/users");

const router = express.Router();

const cookieSession = require("cookie-session");
router.use(
  cookieSession({
    name: "session",
    keys: ["fasdklfhaklsdhfklas"],
  })
);

// app.use(express.urlencoded({ extended: true })); // creates req.body

// Create a new user
router.post("/signUp", (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  userQueries
    .addUser(user)
    .then((user) => {
      if (!user) {
        return res.send({ error: "error" });
      }

      req.session.userId = user.id;
    })
    .catch((err) => res.send(err));
});

// Log a user in
router.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

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
            name: user.name,
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
router.post("/logout", (req, res) => {
  req.session.userId = null;
  res.send({});
});

// router.get('/', (req, res) => {
//   userQueries.getUsers()
//     .then(users => {
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

module.exports = router;
