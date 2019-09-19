import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'
import WeekDate from './WeekDate.js'

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <span className="main-nav">
        <h1 id="logo">Pick6</h1>
        {props.currentUser ?
        <>
          <NavLink to="/" className="nav-links">Home</NavLink>
          <WeekDate />
          <NavLink to="/groups/new" className="nav-links">New Group</NavLink>
          <Logout />
        </>
      : null}
        {props.location.pathname === "/login" ? <><NavLink to="/signup" className="signlog-links">Sign Up</NavLink><br/><br/></> : null}
        {props.location.pathname === "/signup" ? <><NavLink to="/login" className="signlog-links">Log In</NavLink><br/><br/></> : null}

      </span>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
