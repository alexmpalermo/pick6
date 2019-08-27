import React from 'react'
import { connect } from 'react-redux'
import { updateNewGroupForm } from '../actions/newGroupForm.js'

const NewGroupForm = ({name, price, history}) => {
  const handleChange = event => {
    const {name, value} = event.target
    updateNewGroupForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
    //  handleSubmit(formData)
    }}>
      <input placeholder="group name" type="text" name="name" value="name" onChange={handleChange} /><br/>
      <input placeholder="week price" type="" name="price" value="number" onChange={handleChange} /><br/>
      <input type="submit" value="Create Group" />
    </form>
  )
}

const mapStateToProps = state => {
  const {name, price} = state.newGroupForm
  return {
    name, price
  }
}

export default connect(mapStateToProps, { updateNewGroupForm })(NewGroupForm)
