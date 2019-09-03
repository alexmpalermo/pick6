import React from 'react'
import {Link} from 'react-router-dom'


const GroupShow = ({ group }) => {
  const editGroup = <EditGroupForm group={group} />

  return (
    group ?
      <div>
        <h3>{group.attributes.name}</h3>
        <p>{group.attributes.price}</p>
        <p>{group.attributes.code}</p>
        <Link to={`/groups/${group.id}/edit`}>Edit this group</Link>
      </div> :
      <p>This the the Group show with no group!</p>
  )
}

export default GroupShow
