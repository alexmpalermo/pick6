import React from 'react'
import { connect } from 'react-redux'
import { updateEditGroupForm, setFormDataForEdit } from '../actions/editGroupForm.js'
import { updateGroup, deleteGroup } from '../actions/myGroups.js'

class Admin extends React.Component {

  componentDidMount(){
    this.props.group && this.props.setFormDataForEdit(this.props.group)
  }

  componentDidUpdate(prevProps) {
    this.props.group && !prevProps.group && this.props.setFormDataForEdit(this.props.group)
  }


  handleChange = (event) => {
    const {name, value} = event.target
    const { updateEditGroupForm } = this.props
    updateEditGroupForm(name, value)
  }

  handleSubmit = (event) => {
    const { formData, updateGroup, group, history } = this.props
    event.preventDefault()
    updateGroup({
      ...formData,
      groupId: group.id
    }, history)
  }

  render() {
    const { formData, group, history, deleteGroup} = this.props
    const groupId = group ? group.id : null
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input placeholder="name" type="text" name="name" value={formData.name} onChange={this.handleChange} /><br/>
        <input placeholder="weekly pick sheet price" type="number" min="0" name="price" value={formData.price} onChange={this.handleChange} /><br/>
        <input type="submit" value="Edit Group" />
      </form>

        <br/><button style={{color: "red"}} onClick={()=>deleteGroup(groupId, history)}>Delete this group</button>
      </>
    )
  }
}

const mapStateToProps = state => {

  return {
    formData: state.editGroupForm
  }
}

export default connect(mapStateToProps, { updateEditGroupForm, updateGroup, deleteGroup, setFormDataForEdit})(Admin)
