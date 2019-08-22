import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <h1>Pick6</h1>
      {props.currentUser ? <Logout /> : null}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
