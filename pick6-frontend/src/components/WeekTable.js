import React from 'react'
import { connect } from 'react-redux'

const WeekTable = ({week, user, teams, groups}) => {
  const group = groups ? groups.find(group => group.id === week.relationships.group.data.id) : null
  const finalGame = week.attributes.games[week.attributes.games.length - 1]
  const winners = []
  const allPoints = []

  const homes = teams.length > 0 ?
  week.attributes.games.map(g => {
    const home = teams.find(team => team.attributes.number === g.home)
    return (
      <td key={home.id}>{home.attributes.abrv}</td>
    )
  }) : null

  const handicaps = week.attributes.games.map((g, i) => {
    return (
      <td key={i}>{g.handicap}</td>
    )
  })

  const aways = teams.length > 0 ?
  week.attributes.games.map(g => {
    const away = teams.find(team => team.attributes.number === g.away)
    return (
      <td key={away.id}>{away.attributes.abrv}</td>
    )
  }) : null

  const winningteams = teams.length > 0 ?
  week.attributes.games.map((g, i) => {
    const winner = teams.find(team => team.attributes.number === parseInt(g.winner))
    const winAdd = () => {
      winners.push(winner.attributes.number)
      return winner.attributes.abrv
    }
    const key = `${g.id}a${i}`
    const key2 = `${g.id}b${i}`
    return (
      parseInt(g.winner) > 0 ?
      <td key={key}>{winAdd()}</td>
      : <td key={key2}> - </td>
    )
  }) : null

  const finalpoints = week.attributes.picks.map((pick, i) => {
    const userWins = []
    const pointsTotal = () => {
      if (userWins.length > 0) {
        allPoints.push(userWins.length)
        pick.points = userWins.length
        return pick.points
      } else {
        return 0
      }
    }
    const key4 = `${pick.id}a${i}`
    return (
      <tr key={key4}>
        <td>{pick.username}</td>
        {pick.teams.map((t, i) => {
          const pointAdd = () => {
            if (winners.includes(t.number)) {
              userWins.push(t.number)
              return (t.abrv)
            } else {
              return (t.abrv)
            }
          }
          const key3 = `${t.id}a${i}`
          return (
            <td key={key3}>{pointAdd()}</td>
          )
        })}
        <td>{pick.tiebreaker}</td>
        <td>.</td>
        <td><strong>{pointsTotal()}</strong></td>
      </tr>
    )
  })

  const userWhoWon = () => {
    const max = Math.max(...allPoints)
    const picksMax = week.attributes.picks.filter(p => p.points === max)

    if (picksMax.length === 1) {
      return (
        <><h3>This Week's Winner Is: </h3>
        <h3>{picksMax[0].username}</h3>
        </>
      )
    } else if (picksMax.length > 1) {
      const tiebreakers = picksMax.map(pick => pick.tiebreaker)
      const closest = tiebreakers.reduce((prev, curr) => {
        return (Math.abs(curr - finalGame.total) < Math.abs(prev - finalGame.total) ? curr : prev);
      });
      const closestWinner = picksMax.filter(pick => pick.tiebreaker === closest)
      if (closestWinner.length > 1) {
        const multWinners = closestWinner.map(pick => {
          return (`${pick.username}    `)
        })
        return(
          <><h3>This Week's Winners Are: </h3>
          <h3>{multWinners}</h3>
          </>
        )
      } else {
        return(
          <><h3>This Week's Winner Is: </h3>
          <h3>{closestWinner[0].username}</h3>
          </>
        )
      }
    } else {
      return null
    }
  }

  return (
    teams.length > 0 && groups.length > 0 ?
    <>
    <div>
      <h2>WEEK {week.attributes.number} SPREADSHEET</h2>
      <div>
      <span>{allPoints.length > 0 ? userWhoWon() : null}</span>
        <table>
          <tbody>
            <tr>
              <td><strong>HOME</strong></td>
              {homes}
              <td>.</td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>SPREAD</strong></td>
              {handicaps}
              <td>.</td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>AWAY</strong></td>
              {aways}
              <td><strong>POINTS</strong></td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>WINNING TEAM</strong></td>
              {winningteams}
              <td>{finalGame.total ? finalGame.total : "."}</td>
              <td>.</td>
              <td><strong>TOTAL WINS</strong></td>
            </tr>
            <tr>
              <td><strong>NAME</strong></td>
              <td>.</td>
              <td>.</td>
            </tr>
            {finalpoints}
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
