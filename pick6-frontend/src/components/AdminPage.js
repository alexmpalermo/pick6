import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminPage = props => {
  const editLinks = props.teams.length > 0 && props.games.length > 0 ?
      props.games.map(game => {
      const homet = props.teams.find(t => t.attributes.number === parseInt(game.attributes.home))
      const awayt = props.teams.find(t => t.attributes.number === parseInt(game.attributes.away))
      return (
      <p key={game.id}>
        <Link to={`/games/${game.id}/edit`}>
          {homet.attributes.abrv} v {awayt.attributes.abrv}
        </Link>
      </p>
      )
    }) : null
  return (
    <div className="AdminPage">
      <h2>Welcome, Admin</h2>
      <span>{editLinks}</span>
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


// <AdminEditGameForm game={game} />
