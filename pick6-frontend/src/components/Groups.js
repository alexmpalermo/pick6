import React from 'react'
import { Link } from 'react-router-dom'


const Groups = ({ groups, user }) => {
  console.log("in groups...", user)

  return (
    groups.length > 0 ?
      <div className="group-list">
        {groups.map((group) => {
          return <p key={group.id}><Link to={`/groups/${group.id}`} >{group.attributes.name}</Link></p>
          }
        )}
      </div> :
      <p>You currently have no groups! Create or join one below.</p>
  )
}

export default Groups
