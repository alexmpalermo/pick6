import React from 'react'
import { connect } from 'react-redux'

const Login = (props) => {
  return (
    <form onSubmit={undefined}>
      <input placeholder="email" value={props.email} name="email" type="text" onChange={undefined} />
      <input placeholder="password" value={props.password} name="password" type="password" onChange={undefined} />
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    email: state.loginForm.email
    password: state.loginForm.password
  }
}

export default Login
