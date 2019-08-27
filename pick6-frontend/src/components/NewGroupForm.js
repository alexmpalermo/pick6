import React from 'react'
import { connect } from 'react-redux'
import { updateNewGroupForm } from '../actions/newGroupForm.js'

const NewGroupForm = ({ formData, history, updateNewGroupForm}) => {
  const {name, price} = formData

  const handleChange = event => {
    const {name, value} = event.target
    updateNewGroupForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
    //  handleSubmit(formData)
    }}>
      <input placeholder="group name" type="text" name="name" value={formData.name} onChange={handleChange} /><br/>
      <input placeholder="weekly pick sheet price" type="number" name="price" value={formData.price} onChange={handleChange} /><br/>
      <input type="submit" value="Create Group" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    formData: state.newGroupForm
  }
}

export default connect(mapStateToProps, { updateNewGroupForm })(NewGroupForm)
