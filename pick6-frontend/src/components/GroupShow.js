import React from 'react'
import {Link} from 'react-router-dom'
import EditGroupForm from './EditGroupForm.js'
import { connect } from 'react-redux'

const GroupShow = (props, { group }) => {
  console.log("groupshow...", props.currentUser)

  return (

    group ?
      <><h3>{group.attributes.name}</h3>
      <h4>{group.attributes.price}</h4>
      <h4>{group.attributes.code}</h4></> :
      <p>This the the Group show with no group!</p>

  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(GroupShow)


// {group && parseInt(group.attributes.adminid) === parseInt(userid) ? (
//   <Link to={`/groups/${group.id}/edit`}>Edit this group</Link>
// ) : (
//   null
// )}
