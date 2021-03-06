import React from 'react'
import { connect } from 'react-redux'
import moment from "moment";

const WeekTable = ({week, user, teams, groups}) => {
  const group = groups ? groups.find(group => group.id === week.relationships.group.data.id) : null
  const finalGame = week.attributes.games[week.attributes.games.length - 1]
  const winners = []
  const allPoints = []
  const colspanLength = week.attributes.games.length
  const gamesInOrder = week.attributes.games.sort((a, b) => a.day > b.day);

  const homes = teams.length > 0 ?
  gamesInOrder.map(g => {
    const home = teams.find(team => team.attributes.number === g.home)
    return (
      <td key={home.id}>{home.attributes.abrv}</td>
    )
  }) : null

  const spreads = gamesInOrder.map((g, i) => {
    return (
      <td key={i}>{g.spread}</td>
    )
  })

  const aways = teams.length > 0 ?
  gamesInOrder.map(g => {
    const away = teams.find(team => team.attributes.number === g.away)
    return (
      <td key={away.id}>{away.attributes.abrv}</td>
    )
  }) : null

  const winningteams = teams.length > 0 ?
  gamesInOrder.map((g, i) => {
    const winner = teams.find(team => team.attributes.number === parseInt(g.winner))
    const winAdd = () => {
      winners.push(winner.attributes.number)
      return winner.attributes.abrv
    }
    const key = `${g.id}a${i}`
    const key2 = `${g.id}b${i}`
    return (
      parseInt(g.winner) > 0 ?
      <td key={key}><strong>{winAdd()}</strong></td>
      : <td key={key2}> - </td>
    )
  }) : null

  const finalpoints = week.attributes.picks.map((pick, i) => {
    const userWins = []
    const pointsTotal = () => {
      if (userWins.length > 0) {
        allPoints.push(userWins.length)
        pick.points = userWins.length
        return (<td id="winning-square"><strong>{pick.points}</strong></td>)
      } else {
        return (<td id="winning-square"><strong>0</strong></td>)
      }
    }
    const key4 = `${pick.id}a${i}`
    const picksss = gamesInOrder.map(g => {
      return [g.home, g.away]
    })
    const picksOneArray = picksss.flat()
    const picksInOrder = pick.teams.sort((a, b) => {
      return picksOneArray.indexOf(a.number) - picksOneArray.indexOf(b.number)
    })

    return (
      <tr key={key4}>
        <td>{pick.username}</td>
        {picksInOrder.map((t, i) => {
          const pointAdd = () => {
            const key3 = `${t.id}a${i}`
            if (winners.includes(t.number)) {
              userWins.push(t.number)
              return (<td key={key3} id="winning-square">{t.abrv}</td>)
            } else {
              return (<td key={key3}>{t.abrv}</td>)
            }
          }
          return (pointAdd())
        })}
        <td>{pick.tiebreaker}</td>
        <td id="rs-empty"></td>
        {pointsTotal()}
      </tr>
    )
  })

  const userWhoWon = () => {
    const max = Math.max(...allPoints)
    const picksMax = week.attributes.picks.filter(p => p.points === max)
    const today = moment().format('YYYY-MM-DD')

    if (picksMax.length === 1 && today > finalGame.day) {
      return (
        <><h3>This Week's Winner Is: </h3>
        <h3>{picksMax[0].username}</h3>
        </>
      )
    } else if (picksMax.length > 1 && today > finalGame.day) {
      const tiebreakers = picksMax.map(pick => pick.tiebreaker)
      const closest = tiebreakers.reduce((prev, curr) => {
        return (Math.abs(curr - finalGame.total) < Math.abs(prev - finalGame.total) ? curr : prev);
      });
      const closestWinner = picksMax.filter(pick => pick.tiebreaker === closest)
      if (closestWinner.length > 1) {
        const lastpick = closestWinner[closestWinner.length-1]
        const multWinners = closestWinner.map(pick => {
          return (
            pick === lastpick ? `${lastpick.username}`: `${pick.username} & `
          )
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
      <h2 className="page-title">{group.attributes.name}</h2>
      <h2 className="page-title">WEEK {week.attributes.number} SPREADSHEET</h2>
      <div className="section shadow scroll_box" id="week-table-box">
      <span>{allPoints.length > 0 ? userWhoWon() : null}</span>
        <table className="weekTable" align="center">
          <tbody>
            <tr className="home-away-spread">
              <td id="rs-name"><strong>HOME</strong></td>
              {homes}
              <td rowSpan="3" id="rs-name-nb1"></td>
              <td rowSpan="3" id="rs-empty-green"></td>
              <td rowSpan="3" id="rs-name-nb2"></td>
            </tr>
            <tr className="home-away-spread">
              <td id="rs-name"><strong>SPREAD</strong></td>
              {spreads}
            </tr>
            <tr className="home-away-spread">
              <td id="rs-name"><strong>AWAY</strong></td>
              {aways}
            </tr>
            <tr className="winning-team">
              <td><strong>WINNING TEAM</strong></td>
              {winningteams}
              <td><strong>{finalGame.total ? finalGame.total : "."}</strong></td>
              <td id="rs-empty"></td>
              <td></td>
            </tr>
            <tr className="name-row">
              <td id="rs-name"><strong>NAME</strong></td>
              <td colSpan={colspanLength} id="rs-name"></td>
              <td id="rs-name"><strong>FINAL SCORE</strong></td>
              <td id="rs-empty"></td>
              <td id="rs-name-yellow"><strong>TOTAL WINS</strong></td>
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
