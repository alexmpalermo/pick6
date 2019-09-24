import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Groups from './Groups.js'
import JoinGroup from './JoinGroup.js'

const UserShow = (props) => {

  return (
    <div>
      {props.currentUser ? <><h1 className="page-title">Welcome, {props.currentUser.attributes.name}!</h1><br/></> : null }
      {props.currentUser.id === '18' ? <><span className="admin-button"><Link className="edit-button-link" to={`/admin`}>Admin Edit</Link></span><br/><br/></> : null}
      <div className="section shadow scroll_box" id="groups-list">
        <Groups groups={props.groups} />
      </div>
      <br/>
      <div className="section shadow scroll_box" id="join">
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
