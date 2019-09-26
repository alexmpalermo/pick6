import React from 'react'
import { connect } from 'react-redux'

const MyPicks = ({week, teams, user}) => {

  const picks = user.attributes.picks.find(p => p.week_id === parseInt(week.id))

  return (
    teams.length > 0 ?
    <>
    <h2 className="page-title">My Week {week.attributes.number} Picks:</h2>
    <div className="shadow section scroll_box" id="pick-form-brown-box">
      <div className="pick-form">
        <table className="pick-sheet-teams">
          <thead>
          <tr className="h-a-s">
            <th>Home</th>
            <th>Spread</th>
            <th>Away</th>
            <th>My picks</th>
          </tr>
          </thead>
          <tbody className="teams-table-rows">
          {week.attributes.games.map(game => {
            const home = teams.find(team => team.attributes.number === game.home)
            const away = teams.find(team => team.attributes.number === game.away)
            const myPick = picks.teams.find(t => t.number === home.attributes.number || t.number === away.attributes.number)

            return (
              <tr key={home.id}>
                <td>{home.attributes.name}</td>
                <td>{game.spread}</td>
                <td>{away.attributes.name}</td>
                <td><strong>{myPick.abrv}</strong></td>
              </tr>
            )
          })}
          <tr>
            <td colSpan="3"><strong>Tiebreaker</strong></td>
            <td><strong>{picks.tiebreaker}</strong></td>
          </tr>
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
