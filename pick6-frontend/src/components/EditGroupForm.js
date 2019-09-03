import React from 'react'
import { connect } from 'react-redux'
import { updateEditGroupForm } from '../actions/editGroupForm.js'
import { updateGroup, deleteGroup } from '../actions/myGroups.js'

const EditGroupForm = ({ formData, group, history, updateEditGroupForm, updateGroup, deleteGroup}) => {

  const {name, price} = formData
  const groupId = group ? group.id : null
  console.log(group)

  const handleChange = event => {
    const {name, value} = event.target
    updateEditGroupForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateGroup({
      ...formData,
      groupId
    }, history)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input placeholder={group.attributes.name} type="text" name="name" value={formData.name} onChange={handleChange} /><br/>
      <input placeholder={group.attributes.price} type="number" min="0" name="price" value={formData.price} onChange={handleChange} /><br/>
      <input type="submit" value="Edit Group" />
    </form>

      <br/><button style={{color: "red"}} onClick={()=>deleteGroup(groupId, history)}>Delete this group</button>
    </>
  )
}

const mapStateToProps = state => {

  return {
    formData: state.editGroupForm
  }
}

export default connect(mapStateToProps, { updateEditGroupForm, updateGroup, deleteGroup })(EditGroupForm)
