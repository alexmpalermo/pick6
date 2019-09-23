import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ formData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...formData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(formData, history)
  }

  return (
    <>
    <h1 className="page-title">Log In</h1><br/>
    <form onSubmit={handleSubmit}>
      <input placeholder="email" value={formData.email} name="email" type="email" onChange={handleInputChange} className="input"/>
      <input placeholder="password" value={formData.password} name="password" type="password" onChange={handleInputChange} className="input"/>
      <input type="submit" value="Log In" className="input"/>
    </form>
    </>
  )
}

const mapStateToProps = state => {
  return { formData: state.loginForm }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
