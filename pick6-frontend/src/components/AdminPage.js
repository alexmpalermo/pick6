import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminPage = props => {
  console.log(props)
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

  const display = () => {
    if (props.currentUser.id === "18") {
      return (<><h2>Welcome, Admin</h2><span>{editLinks}</span></>)
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
