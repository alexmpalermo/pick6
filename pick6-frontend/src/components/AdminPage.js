import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminPage = props => {

  const editLinks = (weeknumber) => {
    if (props.teams.length > 0 && props.games.length > 0) {
      const weekGames = props.games.filter(game => game.attributes.weeks[0].number === weeknumber)
      return (weekGames.map(game => {
        const homet = props.teams.find(t => t.attributes.number === parseInt(game.attributes.home))
        const awayt = props.teams.find(t => t.attributes.number === parseInt(game.attributes.away))
        return (
          <p key={game.id} className="game-links">
            <Link to={`/games/${game.id}/edit`}>
            {homet.attributes.abrv} v {awayt.attributes.abrv}
            </Link>
          </p>
        )
      }))
    } else {
      return null
    }
  }

  const gamesByWeek = () => {
    return (
      <>
      <div className="admin-week-names"><p>Week 1</p>{editLinks(1)}</div>
      <div className="admin-week-names"><p>Week 2</p>{editLinks(2)}</div>
      <div className="admin-week-names"><p>Week 3</p>{editLinks(3)}</div>
      <div className="admin-week-names"><p>Week 4</p>{editLinks(4)}</div>
      <div className="admin-week-names"><p>Week 5</p>{editLinks(5)}</div>
      <div className="admin-week-names"><p>Week 6</p>{editLinks(6)}</div>
      <div className="admin-week-names"><p>Week 7</p>{editLinks(7)}</div>
      <div className="admin-week-names"><p>Week 8</p>{editLinks(8)}</div>
      <div className="admin-week-names"><p>Week 9</p>{editLinks(9)}</div>
      <div className="admin-week-names"><p>Week 10</p>{editLinks(10)}</div>
      <div className="admin-week-names"><p>Week 11</p>{editLinks(11)}</div>
      <div className="admin-week-names"><p>Week 12</p>{editLinks(12)}</div>
      <div className="admin-week-names"><p>Week 13</p>{editLinks(13)}</div>
      <div className="admin-week-names"><p>Week 14</p>{editLinks(14)}</div>
      <div className="admin-week-names"><p>Week 15</p>{editLinks(15)}</div>
      <div className="admin-week-names"><p>Week 16</p>{editLinks(16)}</div>
      <div className="admin-week-names"><p>Week 17</p>{editLinks(17)}</div>
      </>
    )
  }

  const display = () => {
    if (props.currentUser.id === "18") {
      return (<><h2 className="page-title">Welcome, Admin</h2><span className="section shadow scroll_box" id="admin-gamelist">{gamesByWeek()}</span></>)
    } else {
      return (<p>You must be an admin to access this page.</p>)
    }
  }

  return (
    <div className="AdminPage">
    {props.currentUser ? display() : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    games: state.games,
    teams: state.teams
  }
}

export default connect(mapStateToProps)(AdminPage)
