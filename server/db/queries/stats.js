const db = require("../connection");

const addUserStats = (user_id, win_count, lose_count) => {
  const queryParams = [user_id, win_count, lose_count];
  let queryString = `INSERT INTO stats(user_id, win_count, lose_count)
  VALUES($1, $2, $3) RETURNING *;`;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const countGamesByUser = (user_id) => {
  return db
    .query(
      `SELECT SUM(win_count + lose_count) FROM stats WHERE stats.user_id = ${user_id};`
    )
    .then((result) => {
      console.log("result.rows", result);
      const totalGames = Number(result.rows[0].sum);
      return totalGames;
    })
    .catch((err) => {
      console.log("error ", err.message);
    });
};

const getStatsByAllUsers = () => {
  return db
    .query(
      `SELECT stats.user_id, win_count, lose_count, SUM(win_count + lose_count) AS total_games FROM stats GROUP BY user_id, win_count, lose_count`
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log("error ", err.message);
    });
};
module.exports = { addUserStats, countGamesByUser, getStatsByAllUsers };
