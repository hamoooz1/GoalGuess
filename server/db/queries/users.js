const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

//  Get a single user from the database given their id.
const getUserById = (user_id) => {
  return db
    .query(`SELECT * FROM users WHERE users.id = ${user_id};`)
    .then((data) => {
      const user = result.rows[0];
      if (!user) {
        return null;
      } else {
        return user;
      }
    })
    .catch((err) => {
      console.log("error ", err.message);
    });
};
//  Get a single user from the database given their email.
const getUserByEmail = (email) => {
  const queryString = `SELECT * FROM users WHERE email = $1;`;

  return db
    .query(queryString, [email])
    .then((data) => {
      return data.rows[0]; // Assuming the first row contains the user data
    })
    .catch((err) => {
      console.log(err.message);
    });
  // return db
  //   .query(`SELECT users.* FROM users WHERE users.email = ${email};`)
  //   .then((data) => {
  //     const user = data.rows[0];
  //     console.log("user", user);
  //     if (!user) {
  //       return null;
  //     } else {
  //       return user;
  //     }
  //   })
  //   .catch((err) => {
  //     console.log("error ", err.message);
  //   });
};
// Add a new user to the database
const addUser = (user) => {
  const queryParams = [user.name, user.email, user.password];
  let queryString = `INSERT INTO users(full_name, email, password)
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

module.exports = { getUsers, getUserById, addUser, getUserByEmail };
