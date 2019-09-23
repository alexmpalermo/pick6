import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

const Signup = ({ formData, updateSignupForm, signup, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...formData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(formData, history)
  }

  return (
    <>
    <h1 className="page-title">Sign Up</h1><br/>
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={formData.name} name="name" type="text" onChange={handleInputChange} className="input"/><br/>
      <input placeholder="email" value={formData.email} name="email" type="email" onChange={handleInputChange} className="input"/><br/>
      <input placeholder="venmo" value={formData.venmo} name="venmo" type="text" onChange={handleInputChange} className="input"/><br/>
      <input placeholder="password" value={formData.password} name="password" type="password" onChange={handleInputChange} className="input"/><br/>
      <input placeholder="password confirmation" value={formData.password_confirmation} name="password_confirmation" type="password" onChange={handleInputChange} className="input"/><br/><br/>
      <input type="submit" value="Sign Up" className="input"/>
    </form>
    </>
  )
  }

  const mapStateToProps = state => {
  return { formData: state.signupForm }
  }

  export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
