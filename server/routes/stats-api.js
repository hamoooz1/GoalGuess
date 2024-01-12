// const express = require("express");
// const bcrypt = require("bcrypt");
// const app = express();
// const statsQueries = require("../db/queries/stats");

// const router = express.Router();

// const cookieSession = require("cookie-session");

// router.use(
//   cookieSession({
//     name: "session",
//     keys: ["fasdklfhaklsdhfklas"],
//   })
// );
// router.use(express.json());
// router.use(express.urlencoded({ extended: true })); // creates req.body

// add info to stats
// router.post("/", (req, res) => {
//   // const { name, email, password } = req.body;
//   // const user_id = req.session.userId;
//   statsQueries
//     .addUserStats(id, win, lose)
//     .then((existingUser) => {
//       if (existingUser) {
//         return res
//           .status(400)
//           .json({ error: "User with this email already exists" });
//       }

//       // If email doesn't exist, hash the password and add the user
//       const hashedPassword = bcrypt.hashSync(password, 12);
//       return userQueries.addUser({ name, email, password: hashedPassword });
//     })
//     .then((addedUser) => {
//       if (!addedUser) {
//         return res.status(500).json({ error: "Error creating user" });
//       }
//       // req.session.userId = addedUser.id;
//       // res.status(201).json({ message: "User created successfully" });
//       res
//         .status(201)
//         .json({ user: { name: name, email: email, password: password } });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Internal server error" });
//     });
// });
