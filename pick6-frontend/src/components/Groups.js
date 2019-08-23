import React from 'react'
import GroupShow from './GroupShow.js'
import { Link } from 'react-router-dom'

const Groups = ({ groups }) => {

  const groupShow = groups.map(g => <GroupShow group={g} key={g.attributes.code} />)

  return (
    groups ?
      <div className="group-list">
        {groups.map((group) => {
          return <p key={group.attributes.code}><Link to={`/groups/${group.id}`}>{group.attributes.name}</Link></p>
          }
        )}
      </div> :
      <p>You currently have no groups! Create or join one below.</p>
  )
}

export default Groups
