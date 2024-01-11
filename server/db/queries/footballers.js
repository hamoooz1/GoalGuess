const db = require("../connection");

const getFootballers = () => {
  return db.query("SELECT * FROM footballers;").then((data) => {
    return data.rows;
  });
};

module.exports = { getFootballers };
