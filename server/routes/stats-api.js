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
const statsQueries = require("../db/queries/stats");

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

router.post("/", (req, res) => {
  const { user_id, win_count, lose_count, totalGames } = req.body;
  statsQueries
    .addUserStats(user_id, win_count, lose_count, totalGames)
    .then((addedStats) => {
      console.log("addedStats", addedStats);

      if (!addedStats || addedStats.length === 0) {
        return res.status(500).json({ error: "Error adding stats" });
      }

      //   return statsQueries.countGamesByUser(user_id);
      // })
      // .then((totalGames) => {
      //   console.log("totalGames", totalGames);

      return res.status(201).json({
        stats: {
          user_id,
          win_count,
          lose_count,
          totalGames,
        },
      });
    })
    .catch((err) => {
      console.error("Error in / route:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.get("/allUsers", (req, res) => {
  statsQueries
    .getStatsByAllUsers()
    .then((stats) => {
      return res.status(200).json(stats);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
// router.post("/", (req, res) => {
//   const { user_id, win, lose } = req.body;
//   // console.log("Received Payload:", { user_id, win, lose });
//   // statsQueries
//   //   .countGamesByUser(user_id)
//   //   .then((totalGames) => {
//       // console.log("totalGames", totalGames, user_id, win, lose);
//       return statsQueries.addUserStats(user_id, win, lose);
//     })
//     .then((addedStats) => {
//       console.log("addedStats", addedStats);
//       if (!addedStats) {
//         return res.status(500).json({ error: "Error adding stats" });
//       }

//       const statsResult = addedStats[0];
// const total_games = countGamesByUser(user_id)
//       res.status(201).json({
//         stats: {
//           user_id: statsResult.user_id,
//           win: statsResult.win_count,
//           lose: statsResult.lose_count,
//           totalGames: statsResult.total_games,
//         },
//       });
//     })
//     .catch((err) => {
//       console.error("Error in / route:", err);
//       res.status(500).json({ error: "Internal server error" });
//     });
// });
