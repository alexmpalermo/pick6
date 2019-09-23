import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";

const Weeks = ({ group, weeks }) => {
  const today = moment().format('YYYY-MM-DD')
  const currWeek = weeks.length > 0 ? weeks.find(week => {
    if (week.attributes.games > 0) {
      return ((today > week.attributes.games[0].day && today < week.attributes.games[-1].day))
    } else {
      return null
    }

  }) : null

console.log(weeks)

  return (
    weeks.length > 0 ?
      <div className="week-list">
        {currWeek > 0 ? <h3>Current Week: <Link to={`/weeks/${currWeek.id}`}> Week {currWeek.attributes.number}</Link></h3> : null}
        {weeks.map((week) => {
          return <p key={week.id} className="week-name"><Link to={`/weeks/${week.id}`}> Week {week.attributes.number}</Link></p>
          }
        )}
      </div> :
      <p>Something went wrong! This group has no weeks.</p>
  )
}

export default Weeks

//
//
