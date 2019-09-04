import React from 'react'
import {Link} from 'react-router-dom'
import EditGroupForm from './EditGroupForm.js'


const GroupShow = ({ group, userid }) => {
  console.log("in groupshow..", userid)


  return (

    // { (group && group.adminid === user.id) ?
    //   <Link to={`/groups/${group.id}/edit`}>Edit this group</Link>
    //   : null
    // }

    group ?
      <div>
        <h3>{group.attributes.name}</h3>
        <p>{group.attributes.price}</p>
        <p>{group.attributes.code}</p>
      </div> :
      <p>This the the Group show with no group!</p>


  )
}

export default GroupShow
