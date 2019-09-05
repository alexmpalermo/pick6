import React from 'react'
import { connect } from 'react-redux'
import { updateNewGroupForm } from '../actions/newGroupForm.js'
import { createGroup } from '../actions/myGroups.js'

const NewGroupForm = ({ formData, adminid, code, history, updateNewGroupForm, createGroup}) => {

  const {name, price} = formData

  const handleChange = event => {
    const {name, value} = event.target
    updateNewGroupForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createGroup({
      ...formData,
      adminid,
      code
    }, history)
  }

  return (
    <><h2>Create A New Group</h2>
    <form onSubmit={handleSubmit}>
      <input placeholder="group name" type="text" name="name" value={formData.name} onChange={handleChange} /><br/>
      <input placeholder="weekly pick sheet price" type="number" min="0" name="price" value={formData.price} onChange={handleChange} /><br/>
      <input type="submit" value="Create Group" />
    </form></>
  )
}

const mapStateToProps = state => {

  const adminid = state.currentUser ? state.currentUser.id : ""
  const code = Math.floor(Math.random()*16777215637).toString(16)

  return {
    formData: state.newGroupForm,
    adminid,
    code
  }
}

export default connect(mapStateToProps, { updateNewGroupForm, createGroup })(NewGroupForm)
