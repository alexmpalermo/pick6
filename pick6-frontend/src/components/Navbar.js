import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'
import WeekDate from './WeekDate.js'

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <h1>Pick6</h1>
      {props.location.pathname === "/login" ? <><NavLink to="/signup">Sign Up</NavLink><br/><br/></> : null}
      {props.location.pathname === "/signup" ? <><NavLink to="/login">Log In</NavLink><br/><br/></> : null}
      {props.currentUser ?
        <><WeekDate />
        <br/><NavLink to="/groups/new">New Group</NavLink>
        <br/><NavLink to="/">Home</NavLink>
        <Logout /></>
      : null}

    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
