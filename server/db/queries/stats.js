const db = require("../connection");

const addUserStats = (id, win, lose) => {
  const queryParams = [id, win, lose];
  let queryString = `INSERT INTO stats(id, win, lose)
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
