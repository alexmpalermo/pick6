import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Groups from './Groups.js'
import JoinGroup from './JoinGroup.js'

const UserShow = (props) => {

  return (
    <div className="UserShow">
      {props.currentUser ? <h2>Welcome, {props.currentUser.attributes.name}!</h2> : null }
      {props.currentUser.id === '18' ? <Link to={`/admin`}>ADMIN Edit Games</Link> : null}
      <Groups groups={props.groups} />
      <JoinGroup history={props.history} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    groups: state.myGroups
  }
}

export default connect(mapStateToProps)(UserShow)
