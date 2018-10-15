module.exports = (db) => {
    getAllPositionsAndPlayers = () => {
        return new Promise((resolve, reject) => {
            const findPositionsQuery = 'SELECT * FROM position'
            const findPlayersQuery = 'SELECT * FROM player'
            //get the posisions
            let positionMap = {};
            db.query(findPositionsQuery)
            .then((positions) => {
                db.query(findPlayersQuery)
                .then((playerRows) => {
                    // get the data
                    positions.rows.forEach(position => {
                        positionMap[`${position.name}`] = playerRows.rows.filter(player => player.position_id === position.name)
                    })
                    resolve(positionMap)
                })
            })
            .catch((err) => reject(err))
        })
    }


    create = ({  name, user, }) => {
        return new Promise((resolve, reject) => {
            const Query = `INSERT INTO team (name, user_id, players) VALUES ('${name}', '${user.id || null}', '')`
            db.query(Query)
            .then(() => {
                findOne({ name })
                .then((team) => {
                   resolve(team)
                })
                .catch((err) => reject(err))
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    findPlayers = (players) => {
        return new Promise((resolve, reject) => {
            const reducePlayers = () => players.reduce((a,b) => {
                if(b.constructor === Array) {
                    a = [...a, ...b]
                } else {
                    a =[...a, b]
                }
                return a
            }, [])
            const query = `SELECT * from player WHERE id in (${reducePlayers().join(', ')})`
            db.query(query)
            .then((players) => resolve(players.rows))
            .catch((err) => reject(err))
        })
    }

    findOne = (obj) => {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM team WHERE ${Object.keys(obj)[0]} = '${Object.values(obj)[0]}'`
          db.query(query)
          .then((res) => resolve(res.rows[0]))
          .catch((err) => reject(err))
        })
      }

      update = (team, changes) => {
          return new Promise((resolve, reject) => {
              const query = `UPDATE team SET ${Object.keys(changes)[0]} = '${Object.values(changes)[0]}' WHERE id = ${team.id}`
              db.query(query)
              .then((res) =>  {
                findOne({ id: team.id })
                .then((team) => {
                   resolve(team)
                })
                .catch((err) => reject(err))
                })
              .catch((err) => reject(err))
            })
      }



    return {
        getAllPositionsAndPlayers,
        create,
        findOne,
        update,
        findPlayers
    }
}