import React from 'react'
import { connect } from 'react-redux'

const WeekTable = ({week, user, teams, groups}) => {
  const group = groups ? groups.find(group => group.id === week.relationships.group.data.id) : null

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
              <td>.</td>
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
              <td>.</td>
            </tr>
            <tr>
              <td><strong>AWAY</strong></td>
              {week.attributes.games.map(g => {
                const away = teams.find(team => team.attributes.number === g.away)
                return (
                  <td>{away.attributes.abrv}</td>
                )
              })}
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
            <tr>
              <td><strong>WINNING TEAM</strong></td>
              {week.attributes.games.map(g => {
                const winner = teams.find(team => team.attributes.number === g.winner)
                return (
                  g.winner > 0 ?
                  <td>{winner.attributes.abrv}</td> : null
                )
              })}
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
            <tr>
              <td><strong>NAME</strong></td>
              <td>.</td>
              <td>.</td>
            </tr>
            {week.attributes.picks.map(pick => {
              console.log(pick)
              return (
                <tr>
                  <td>{}</td>
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
