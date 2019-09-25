import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";

const Weeks = ({ group, weeks }) => {

  const today = moment().format('YYYY-MM-DD')

  const thisWeek = weeks.filter(week => {
    return today > week.attributes.games[week.attributes.games.length - 1].day
  })

  const actualWeekNumber = () => {
    if (thisWeek.length === 17) {
      return thisWeek.length
    } else {
      return thisWeek.length + 1
    }
  }

  const currWeekObj = weeks.length > 0 ?
    weeks.find(week => week.attributes.number === actualWeekNumber())
    : null

  return (
    weeks.length > 0 ?
      <div className="week-list">
        <h3>Current Week: <Link to={`/weeks/${currWeekObj.id}`}> Week {actualWeekNumber()}</Link></h3>
        <span className="weeks-list-flexbox">
        {weeks.map((week) => {
          if (week.attributes.number !== actualWeekNumber()) {
            return <p key={week.id} className="week-name"><Link to={`/weeks/${week.id}`}> Week {week.attributes.number}</Link></p>
          } else {
            return null
          }}
        )}
        </span>
      </div> :
      <p>Something went wrong! This group has no weeks.</p>
  )
}

export default Weeks
