import React from 'react'
import { connect } from 'react-redux'

const UserShow = (props) => {
  console.log("from usershow props are:", props)
  console.log("props currentuser are:", props.currentUser)
  return (
    <div className="UserShow">
      {props.currentUser ? <h2>Welcome, {props.currentUser.name}!</h2> : null}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(UserShow)
