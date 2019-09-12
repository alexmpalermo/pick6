import React from 'react'
import { connect } from 'react-redux'

const WeekTable = ({week, user, teams, groups}) => {
  const group = groups ? groups.find(group => group.id === week.relationships.group.data.id) : null
  const finalGame = week.attributes.games[week.attributes.games.length - 1]
  const winners = []
  let userWins = []

  return (
    teams.length > 0 && groups.length > 0 ?
    <>
    <div>
      <h2>WEEK {week.attributes.number} SPREADSHEET</h2>
      <div>
        <table>
          <tbody>
            <tr>
              <td><strong>HOME</strong></td>
              {week.attributes.games.map(g => {
                const home = teams.find(team => team.attributes.number === g.home)
                return (
                  <td>{home.attributes.abrv}</td>
                )
              })}
              <td>.</td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>SPREAD</strong></td>
              {week.attributes.games.map(g => {
                return (
                  <td>{g.handicap}</td>
                )
              })}
              <td>.</td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>AWAY</strong></td>
              {week.attributes.games.map(g => {
                const away = teams.find(team => team.attributes.number === g.away)
                return (
                  <td>{away.attributes.abrv}</td>
                )
              })}
              <td><strong>POINTS</strong></td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>WINNING TEAM</strong></td>
              {week.attributes.games.map(g => {
                const winner = teams.find(team => team.attributes.number === parseInt(g.winner))
                const winAdd = () => {
                  winners.push(winner.attributes.number)
                  return winner.attributes.abrv
                }
                return (
                  parseInt(g.winner) > 0 ?
                  <td>{winAdd()}</td>
                  : <td> - </td>
                )

              })}
              <td>{finalGame.total ? finalGame.total : "."}</td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>NAME</strong></td>
              <td>.</td>
              <td>.</td>
            </tr>
            {week.attributes.picks.map(pick => {
              return (
                <tr>
                  <td>{pick.username}</td>
                  {pick.teams.map(t => {
                    const pointAdd = () => {
                      if (winners.includes(t.number)) {
                        userWins.push(t.number)
                        return (t.abrv)
                      } else {
                        return (t.abrv)
                      }
                    }
                    return (
                      <td>{pointAdd()}</td>
                    )
                  })}
                  <td>{pick.tiebreaker}</td>
                  <td>.</td>
                  <td><strong>{userWins.length > 0 ? userWins.length : 0}</strong></td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
    </> : null
  )
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    teams: state.teams,
    groups: state.myGroups
  }
}

export default connect(mapStateToProps)(WeekTable)
