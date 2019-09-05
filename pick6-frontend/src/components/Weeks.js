import React from 'react'
import { Link } from 'react-router-dom'


const Weeks = ({ group }) => {
  console.log("in weeks...", group)
  return (
    group.attributes.weeks.length > 0 ?
      <div className="week-list">
        {group.attributes.weeks.map((week) => {
          return <p key={week.number}><Link to={`/groups/${group.id}`}>{week.number}</Link></p>
          }
        )}
      </div> :
      <p>Something went wrong! This group has no weeks.</p>
  )
}

export default Weeks
