import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";

const Weeks = ({ group, weeks }) => {
  const today = moment().format('YYYY-MM-DD')
  // const currWeek = weeks.length > 0 && weeks[0].attributes.games.length > 0 ? weeks.find(week => today > week.attributes.games[0].day && today < week.attributes.games[-1].day) : null

  // const currWeek = () => {
  //  if (weeks.length > 0) {
  //   const finalGame = weeks[0].attributes.games[weeks[0].attributes.games.length - 1]
  //   console.log("today", today)
  //   console.log("final game", finalGame.day)
  //   console.log("today >= final", today >= finalGame.day)
  //   console.log("today <= final", today <= finalGame.day)
  //   return finalGame
  // } else {
  //   return null
  // }}
  //
  // console.log(currWeek())

  //     // console.log("final game", finalGame.day)
  //     // console.log("today", today)
  //     // console.log("weeks", weeks)
  //     // console.log("is ture?", today >= finalGame.day)
  //     // console.log("is false...", today <= finalGame.day)
  //     // console.log("true??", today <= today)
  //     // console.log("true??", today >= today)
  //     // console.log("find...", weeks.find(week => week.attributes.games[0].day <= today <= week.attributes.games[week.attributes.games.length - 1].day))
  //     // console.log("find2...", weeks.find(week => today <= week.attributes.games[week.attributes.games.length - 1].day))
  //     const nextWeek = weeks.find(week => today <= week.attributes.games[week.attributes.games.length - 1].day)
  //     weeks.map(week => {
  //       if (today >= week.attributes.games[0].day && today <= week.attributes.games[week.attributes.games.length - 1].day) {
  //         return week
  //       } else {
  //         return null
  //       }
  //     })
  //
  //     console.log(nextWeek)
  //     return (nextWeek)
  //   } else {
  //     return null
  //   }
  // }

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








  //   {
  //   console.log(today)
  //   if (today >= week.attributes.games[0].day && today <= week.attributes.games[week.attributes.games.length - 1].day) {
  //     return week
  //   } else {
  //     return null
  //   }
  // })

  console.log(thisWeek)
  console.log(actualWeekNumber())



  return (
    weeks.length > 0 ?
      <div className="week-list">
        <h3>Current Week: <Link to={`/weeks/${actualWeekNumber()}`}> Week {actualWeekNumber()}</Link></h3>
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
