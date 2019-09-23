import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Groups from './Groups.js'
import JoinGroup from './JoinGroup.js'

const UserShow = (props) => {

  return (
    <div>
      {props.currentUser ? <><h1 className="page-title">Welcome, {props.currentUser.attributes.name}!</h1><br/></> : null }
      {props.currentUser.id === '18' ? <><Link to={`/admin`}>ADMIN Edit Games</Link><br/><br/></> : null}
      <div className="section shadow scroll_box">
        <Groups groups={props.groups} />
        <JoinGroup history={props.history} />
      </div>
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
