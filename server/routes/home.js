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

router.get("/", (req, res) => {
  const id = req.session.userId;
  console.log("id", id);
  console.log("idtype", typeof id);
  if (!id) {
    return res.status(401).json({ error: "Invalid session ID" });
  }

  userQueries
    .getUserById(id)
    .then((user) => {
      console.log("user", user);

      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    })
    .catch((error) => {
      console.error("Error getting user by ID:", error);
      return res.status(500).json({ error: "Internal server error" });
    });
});
module.exports = router;
