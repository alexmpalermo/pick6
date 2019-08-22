import React from 'react'


const GroupShow = ({ group }) => {
  return (
    group ?
      <div>
        <h3>{group.attributes.name}</h3>
        <p>{group.attributes.start_date}</p>
        <p>{group.attributes.end_date}</p>
        <button>Edit this group</button>
      </div> :
      <p>This the the Group show with no groups!</p>
  )
}

export default GroupShow
