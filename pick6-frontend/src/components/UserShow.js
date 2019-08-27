import React from 'react'
import { connect } from 'react-redux'
import Groups from './Groups.js'

const UserShow = (props) => {

  return (
    <div className="UserShow">
      {props.currentUser ? <h2>Welcome, {props.currentUser.attributes.name}!</h2> : null }
      <Groups groups={props.groups}/>
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
