var sha256 = require("js-sha256");


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    const create = (user, callback) => {
      // run user input password through bcrypt to obtain hashed password
      const {name, password} = user;
      const hashedPassword = sha256(user.password);
      // set up query
      const queryString = 'INSERT INTO users (name, password) VALUES ($1, $2)';
      const values = [
        name,
        hashedPassword
      ];
      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    const loggedIn = (user, callback) => {
        console.log(user);
        const {name, password} = user;
      // run user input password through bcrypt to obtain hashed password
      const hashedPassword = sha256(user.password);

      const values = [
        name,
        hashedPassword
      ];
      // set up query
      const queryString = "SELECT * FROM users WHERE name=$1 and password=$2 ";
      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    findOne = (obj) => {
      return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE ${Object.keys(obj)[0]} = '${Object.values(obj)[0]}';`
        dbPoolInstance.query(query)
        .then((res) => resolve(res.rows[0]))
        .catch((err) => {
          reject(err)
        })
      })
    }
    
  const updateUser = (id, userDetails, callback) => {
    callback(null, {
      message: 'this should be query response',
      id,
      userDetails
    });
  };

 const deleteUser = (id, callback) => {
     const queryString = `DELETE from users WHERE id = ${id}`;
     dbPoolInstance.query(queryString, (error, queryResult) => {
       if (error) {
         console.log('error deleting tweet:', error);
         callback(error, null);
       } else {
         callback(null, queryResult);
       }
     });
   };

    return {
      create,
      loggedIn,
      findOne,
      deleteUser,
      updateUser
    };
};
