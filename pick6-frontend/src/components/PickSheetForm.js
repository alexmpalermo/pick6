import React from 'react'
import { connect } from 'react-redux'
import { updatePickSheetForm } from '../actions/pickSheetForm.js'
import { createPickSheet } from '../actions/myPicks.js'

const PickSheetForm = ({teams, week, user, formData, history, updatePickSheetForm, createPickSheet}) => {
  console.log(week)
  console.log("user is...", user)
  console.log("teams is top..", teams)


  const handleTieChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...formData,
      [name]: value
    }
    updatePickSheetForm(updatedFormInfo)
  }

  const handleTeamChange = event => {
    const {value} = event.target
    const updatedFormInfo = formData.teams.concat(value)
    updatePickSheetForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createPickSheet(formData, user, week, history)
  }

  return (
    teams.length > 0 ?
    <>
    <h2>Week {week.attributes.number} Pick Sheet</h2>
    <div>
      <div className="pick-table">
        <table>
          <thead>
          <tr>
            <th>Home</th>
            <th>Spread</th>
            <th>Away</th>
          </tr>
          </thead>
          <tbody>
          {week.attributes.games.map(game => {
            let home = teams.find(team => team.attributes.number === game.home)
            let away = teams.find(team => team.attributes.number === game.away)
            return (
              <tr>
                <td>{home.attributes.name}</td>
                <td>{game.handicap}</td>
                <td>{away.attributes.name}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
      <div className="pick-form">
        <form onSubmit={handleSubmit}>
        {week.attributes.games.map((game, i) => {
          let home = teams.find(team => team.attributes.number === game.home)
          let away = teams.find(team => team.attributes.number === game.away)
          return (
            <select name={'team-'+ i} value={formData.teams} onChange={handleTeamChange} >
              <option value={home}>{home.attributes.abrv}</option>
              <option value={away}>{away.attributes.abrv}</option>
            </select>
          )
        })}
        <input placeholder="tiebreaker" type="number" min="0" name="tiebreaker" value={formData.tiebreaker} onChange={handleTieChange} /><br/>
        <input type="submit" value="Submit Picks" />
        </form>
      </div>

    </div>
    </> :
    null
  )
}

const mapStateToProps = state => {
  console.log("state...", state)
  return {
    user: state.currentUser,
    formData: state.pickSheetForm,
    teams: state.teams
  }
}

export default connect(mapStateToProps)(PickSheetForm)
