import React from 'react'
import { connect } from 'react-redux'
import { updateJoinGroupForm } from '../actions/joinGroupForm.js'
import { joinGroup } from '../actions/myGroups.js'


const JoinGroup = ({ formData, currentUser, history, updateJoinGroupForm, joinGroup }) => {

  const handleChange = event => {
    const {name, value} = event.target
    updateJoinGroupForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    joinGroup({
      ...formData,
      currentUser
    }, history)
  }

  return (
    <><h4>Join A Group</h4>
    <form onSubmit={handleSubmit}>
      <input placeholder="group code" type="text" name="code" value={formData.code} onChange={handleChange} />
      <input type="submit" value="Join Group" />
    </form></>
  )
}

const mapStateToProps = state => {

  return {
    formData: state.joinGroupForm,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {updateJoinGroupForm, joinGroup})(JoinGroup)
