import React from 'react'


const GroupShow = ({ group }) => {
  return (
    group ?
      <div>
        <h3>{group.attributes.name}</h3>
        <p>{group.attributes.price}</p>
        <p>{group.attributes.code}</p>
        <button>Edit this group</button>
      </div> :
      <p>This the the Group show with no group!</p>
  )
}

export default GroupShow
