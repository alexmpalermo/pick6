import React from 'react'
import { connect } from 'react-redux'
import { updateEditGroupForm } from '../actions/editGroupForm.js'
import { updateGroup, deleteGroup } from '../actions/myGroups.js'

const EditGroupForm = ({ formData, group, history, updateEditGroupForm, updateGroup, deleteGroup}) => {

  const {name, price} = formData

  const handleChange = event => {
    const {name, value} = event.target
    updateEditGroupForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateGroup({
      ...formData,
      groupId: group.id
    }, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder={group.name} type="text" name="name" value={formData.name} onChange={handleChange} /><br/>
      <input placeholder={group.price} type="number" min="0" name="price" value={formData.price} onChange={handleChange} /><br/>
      <input type="submit" value="Edit Group" />
    </form>
  )
}

const mapStateToProps = state => {

  return {
    formData: state.editGroupForm
  }
}

export default connect(mapStateToProps, { updateEditGroupForm, updateGroup, deleteGroup })(EditGroupForm)
