import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";

const Weeks = ({ group, weeks }) => {
  const today = moment().format('YYYY-MM-DD')
  // const currWeek = weeks.length > 0 && weeks[0].attributes.games.length > 0 ? weeks.find(week => today > week.attributes.games[0].day && today < week.attributes.games[-1].day) : null

  const currWeek = () => {
    const theWeek = weeks.find(week => (today > week.attributes.games[0].day && today < week.attributes.games[-1].day))
    console.log(theWeek)
    return (theWeek)
  }

  console.log(weeks.length > 0 ? weeks : null)
  console.log(currWeek())

  return (
    weeks.length > 0 ?
      <div className="week-list">
        {weeks[-1] ? currWeek().attributes.number : null}
        {weeks.map((week) => {
          return <p key={week.id} className="week-name"><Link to={`/weeks/${week.id}`}> Week {week.attributes.number}</Link></p>
          }
        )}
      </div> :
      <p>Something went wrong! This group has no weeks.</p>
  )
}

export default Weeks

// {currWeek > 0 ? <h3>Current Week: <Link to={`/weeks/${currWeek.id}`}> Week {currWeek.attributes.number}</Link></h3> : null}
//
