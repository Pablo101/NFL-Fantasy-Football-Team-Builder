module.exports = (app, db) => {

  const users = require('./controllers/user')(db);
  const teams = require('./controllers/teams')(db)

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
  // app.get('/logout', users.logoutUser)

  app.get('/', users.loginForm);
  app.get('/users/new', users.newForm);
  app.get('/users/custom', users.introForm)
  // app.post('/users/custom', users.introForm)
  app.post('/users', users.create);
  app.post('/users/login', users.loggedIn);
  app.get('/team/create', teams.handleNewTeam)
  app.post('/team/create', teams.create)
  app.post('/team/:id/players', teams.updateTeamPlayers)
  app.get('/logout', users.logoutUser)
  app.get('/team/:id', teams.findOneTeam)
  app.delete('/users/:id', users.deleteUser)
  app.put('/users/:id', users.updateUser)
};


