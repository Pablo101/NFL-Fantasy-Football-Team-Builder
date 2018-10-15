const sha256 = require('js-sha256')
const db = require('../models/user');

module.exports = (db) => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const newForm = (request, response) => {
    response.render('user/NewUser');
    // response.render("user/NewUser", {cookies: req.cookies});

  };

   const introForm = (request, response) => {
    response.render('user/introPage');
    // response.render("user/NewUser", {cookies: req.cookies});
  };

  const create = (request, response) => {
    const {name, password} = request.body;
    const userObject = {name, password};
      // use user model method `create` to create new user entry in db
      db.user.create(userObject, (error, queryResult) => {

      // const queryString = 'INSERT INTO users (name) VALUES ($1, $2) RETURNING id';

      // const values = [request.body.name];
      // console.log(values);

      // console.log(queryString);

        if (error) {
          console.error('error getting user:', error);
          response.status(500).send({
            message: 'Error creating a new user',
            error
          });
        }

        if (queryResult.rowCount >= 1) {
          console.log('User created successfully');

          // drop cookies to indicate user's logged in status and username
          response.cookie('loggedIn', true);
          // response.cookie('username',  queryResult.rows[0].user_id);
          response.cookie('username', name);

          // redirect to home page after creation
          response.redirect('/users/custom')
        } else {
          console.log('User could not be created');
          response.status(400).send({
            message: 'User could not be created',
            error
          });
        }
      });
  };


const loginForm = (request, response) => {
    response.render('user/loginUser');
}

const loggedIn = (request, response) => {
    console.log(request);
    const {name, password} = request.body;
    db.user.loggedIn({name, password}, (err, queryResult) => {
        if(err) {
            console.log('Query error', err.stack);
            response.sendStatus(500);
        }


    let hashedPass = sha256(request.body.password)

         if (queryResult.rows[0] !== undefined && queryResult.rows[0].password === hashedPass) {
             response.cookie('loggedIn', queryResult.rows[0].password);
             response.cookie('username', queryResult.rows[0].user_id);

             console.log('Welcome, you entered the portal, you are succesfully logged in');
             response.redirect('/users/custom')
         } else {
             console.log('Go away user, you coudnt be logged in')
         }
     });
 }


   const logoutUser = (request, response) => {
         response.clearCookie('loggedIn');
         response.clearCookie('user_id');
         response.redirect('/');
     }



const updateUser = (request, response) => {
  const { id } = request.params;

  db.user.findOne({ id })
    .then((row) => {
      if (!row) {
        response.status(404).send({
          message: 'User does not exist',
          id
        });
      } else {
        db.user.updateUser(id, {}, (error) => {
          if(error) {
            response.status(500).send({
              message: 'Unable to update user details',
              error
            });
          } else {
            response.status(200).send({
              message: 'User details updated successfully',
              id
            });
          }
        });
      }
    })
    .catch((error) => {
      response.status(500).send({
        message: 'Unable tupdate user details',
        error
      });
    });
}

const deleteUser = (request, response) => {
  const { id } = request.params;

  db.user.findOne({ id })
    .then((row) => {
      if (!row) {
        response.status(404).send({
          message: 'User does not exist',
          id
        });
      } else {
        db.user.deleteUser(id, (error) => {
          if(error) {
            response.status(500).send({
              message: 'Unable to delete user',
              error
            });
          } else {
            response.status(200).send({
              message: 'User deleted successfully',
              id
            });
          }
        });
      }
    })
    .catch((error) => {
      response.status(500).send({
        message: 'Unknownn error occured',
        error
      });
    });
}

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newForm,
    create,
    loginForm,
    loggedIn,
    logoutUser,
    introForm,
    deleteUser,
    updateUser,
  };
};

