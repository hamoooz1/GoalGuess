const db = require("../connection");

const addUserStats = (user_id, win_count, lose_count, total_games) => {
  const queryParams = [user_id, win_count, lose_count, total_games];
  let queryString = `INSERT INTO stats(user_id, win_count, lose_count, total_games)
  VALUES($1, $2, $3, $4) RETURNING *;`;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const sumGamesByUser = (user_id) => {
  return db
    .query(`SELECT total_games FROM stats WHERE stats.user_id = ${user_id};`)
    .then((result) => {
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
      `SELECT users.full_name as name, SUM(stats.win_count) as win_count, SUM(stats.lose_count) as lose_count, SUM(stats.total_games) as total_games FROM stats INNER JOIN users ON users.id = stats.user_id GROUP BY stats.user_id, users.full_name ORDER BY win_count DESC;`
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log("error ", err.message);
    });
};
module.exports = { addUserStats, sumGamesByUser, getStatsByAllUsers };
