import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'
import WeekDate from './WeekDate.js'

const Navbar = (props) => {
  return (
    <div className="Navbar">
      {props.currentUser ?
        <>
          <span className="main-nav">
            <h1 id="logo">Pick6</h1>
            <NavLink to="/" className="nav-links">Home</NavLink>
            <WeekDate />
            <NavLink to="/groups/new" className="nav-links">New Group</NavLink>
            <Logout />
          </span>
        </> :
      props.location.pathname === "/login" ?
        <><span className="main-nav-notloggedin">
          <h1 id="logo">Pick6</h1>
          <NavLink to="/signup" className="signlog-links">Sign Up</NavLink>
        </span></> :
      props.location.pathname === "/signup" ?
        <><span className="main-nav-notloggedin">
          <h1 id="logo">Pick6</h1>
          <NavLink to="/login" className="signlog-links">Log In</NavLink>
        </span></> :
        <>
        <span className="main-nav">
          <h1 id="logo">Pick6</h1>
        </span>
        </>
      }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)

// {props.location.pathname === "/login" ? <><NavLink to="/signup" className="signlog-links">Sign Up</NavLink></> : null}
// {props.location.pathname === "/signup" ? <><NavLink to="/login" className="signlog-links">Log In</NavLink></> : null}
