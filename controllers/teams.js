

module.exports = (db) => {

 const handleNewTeam = (req, res) => {
     db.team.getAllPositionsAndPlayers()
     .then(positions => res.render('team/index', { positions: positions }))
     .catch((err) => {
        res.json({ error: true, err })
     })
 }

 const create = (req, res) => {
     db.user.findOne({ name: req.cookies.username })
     .then((user) => {
         if(!user) return res.json({ err: "No user in session, please log in" })
         db.team.create({ name: req.body.name, user })
         .then((team) => {
             db.team.getAllPositionsAndPlayers()
             .then((positions) => {
                 res.render('team/index', { positions: positions, team })
             })
             .catch((err) => res.json({ error: true, message: err.message }))
         })
         .catch((err) => {
             res.json({ error: true, message: "Please dont use the apostrophe in your name. Thanks" })
         })
     })
     .catch((err) => res.json({ err }))
 }

 const updateTeamPlayers = (req, res) => {
     db.team.findOne({ id: req.params.id })
     .then((team) => {
         if(!team) return res.json({ message: 'Oops couldnt find a team matching that '})
         db.team.update(team, { players: JSON.stringify(Object.values(req.body)) })
         .then((team) => res.redirect(`/team/${team.id}`))
         .catch((err) => res.json({ err }))
     })
     .catch((err) => {
         res.json({ err })
        })
    }

  const findOneTeam = (req, res) => {
      try {
      db.team.findOne({ id: req.params.id })
      .then((team) => {
          if(!team || !team.players) return res.json({ team, message: "no players to display" })
          db.team.findPlayers(JSON.parse(team.players))
          .then((players) => {
              res.render('team/displayTeam', { team, players })
          })
          .catch((err) => {
              res.json({ err }) })
      })
      .catch((err) => res.json({ err }))
    } catch (e) {
      res.json({ message: e.message })
  }

 }

   return {
       handleNewTeam,
       create,
       updateTeamPlayers,
       findOneTeam
   }
}