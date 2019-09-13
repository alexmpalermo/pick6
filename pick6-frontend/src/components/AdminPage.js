import React from 'react'
import { connect } from 'react-redux'
import AdminEditGameForm from './AdminEditGameForm.js'

const AdminPage = (props) => {

  return (
    <div className="AdminPage">
      <h2>Welcome, Admin</h2>
      {props.games.map(game => {return <AdminEditGameForm game={game} />})}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    games: state.games
  }
}

export default connect(mapStateToProps)(AdminPage)
