import React from 'react'
import {Link} from 'react-router-dom'
import EditGroupForm from './EditGroupForm.js'
import { connect } from 'react-redux'

const GroupShow = (props) => {
  console.log("groupshow...", props)
  console.log("groupshow group... ", props.group)

  return (
    <div className="group-show">
      {props.group && parseInt(props.group.attributes.adminid) === parseInt(props.currentUser.id) ? <Link to={`/groups/${props.group.id}/edit`}>Edit this group</Link> : null}
      {props.group ? <><h3>{props.group.attributes.name}</h3><h4>{props.group.attributes.price}</h4><h4>{props.group.attributes.code}</h4></> : <p>This the the Group show with no group!</p>}
    </div>
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
