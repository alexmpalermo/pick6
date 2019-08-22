import React from 'react'


const Groups = ({ groups }) => {
  return (

    groups ?
      <div className="group-list">
        {groups.map((group) => {
          return <p key={group.attributes.code}>{group.attributes.name}</p>
          }
        )}
      </div> :
      <p>You currently have no groups! Create or join one below.</p>
  )
}

export default Groups
