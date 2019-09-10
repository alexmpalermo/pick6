import React from 'react'
import { connect } from 'react-redux'

const MyPicks = ({week, teams, user}) => {

  return (
    teams.length > 0 ?
    <>
    <h2>My Week {week.attributes.number} Picks:</h2>
    <div>
      <div className="my-picks">
        <table>
          <thead>
          <tr>
            <th>Home</th>
            <th>Spread</th>
            <th>Away</th>
          </tr>
          </thead>
          <tbody>
          {week.attributes.games.map(game => {
            let home = teams.find(team => team.attributes.number === game.home)
            let away = teams.find(team => team.attributes.number === game.away)
            return (
              <tr>
                <td>{home.attributes.name}</td>
                <td>{game.handicap}</td>
                <td>{away.attributes.name}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
    </> :
    null
  )
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    teams: state.teams
  }
}

export default connect(mapStateToProps)(MyPicks)
