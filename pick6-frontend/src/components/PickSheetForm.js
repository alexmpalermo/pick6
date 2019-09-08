import React from 'react'
import { connect } from 'react-redux'
import { updatePickSheetForm } from '../actions/pickSheetForm.js'
import { createPickSheet } from '../actions/myPicks.js'

const PickSheetForm = ({week, user, formData, history, updatePickSheetForm, createPickSheet}) => {

  const handleTieChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...formData,
      [name]: value
    }
    updatePickSheetForm(updatedFormInfo)
  }

  const handleTeamChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...formData,
      teams: {
        ...formData.teams,
        [name]: value
      }
    }
    updatePickSheetForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createPickSheet(formData, user, week, history)
  }

  return (
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
          {week.games.map(game => {
            return (
              <tr>
                <td>{game.home.name}</td>
                <td>{game.handicap}</td>
                <td>{game.away.name}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
      <div className="pick-form">
        <form onSubmit={handleSubmit}>
        {week.games.map((game, i) => {
          return (
            <select name={i} value={formData.teams} onChange={handleTeamChange} >
              <option value={game.home}>{game.home.name}</option>
              <option value={game.away}>{game.away.name}</option>
            </select>
          )
        })}
        <input placeholder="tiebreaker" type="number" min="0" name="tiebreaker" value={formData.tiebreaker} onChange={handleTieChange} /><br/>
        <input type="submit" value="Submit Picks" />
        </form>
      </div>

    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(PickSheetForm)
