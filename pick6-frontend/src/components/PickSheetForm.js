import React from 'react'
import { connect } from 'react-redux'
import { updatePickSheetForm } from '../actions/pickSheetForm.js'
import { updatePickSheetFormTeams, removeTeamFromPickSheetForm } from '../actions/pickSheetFormTeams.js'
import { createPickSheet } from '../actions/myPicks.js'

const PickSheetForm = ({teams, teamsArr, week, userId, formData, updatePickSheetForm, updatePickSheetFormTeams, removeTeamFromPickSheetForm, createPickSheet}) => {

  const handleTieChange = event => {
    const {name, value} = event.target
    updatePickSheetForm(name, value)
  }

  const handleTeamChange = event => {
    const {value} = event.target
    const otherTeam = () => {
      const currentGame = week.attributes.games.find(g => g.away === parseInt(value) || g.home === parseInt(value))

      if (currentGame.home === parseInt(value)) {
        return `${currentGame.away}`
      } else {
        return `${currentGame.home}`
      }
    }

    if (teamsArr.includes(value)) {
      return null
    } else if (teamsArr.includes(otherTeam())) {
      removeTeamFromPickSheetForm(otherTeam())
      updatePickSheetFormTeams(value)
    } else {
      updatePickSheetFormTeams(value)
    }

  }

  const handleSubmit = event => {
    event.preventDefault()
    createPickSheet({
      ...formData,
      userId,
      weekId: week.id
    }, teamsArr)
  }

  return (
    teams.length > 0 ?
    <>
    <h2 className="page-title">Week {week.attributes.number} Pick Sheet</h2>
    <div className="shadow section scroll_box" id="pick-form-brown-box">
      <div className="pick-form">
        <table className="pick-sheet-teams">
          <thead>
          <tr>
            <th>Home</th>
            <th>Spread</th>
            <th>Away</th>
          </tr>
          </thead>
          <tbody>
          {week.attributes.games.map(game => {
            const home = teams.find(team => team.attributes.number === game.home)
            const away = teams.find(team => team.attributes.number === game.away)
            return (
              <tr key={home.id}>
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
        <p className="my-picks-p">My picks:</p>
        <form onSubmit={handleSubmit}>
        {week.attributes.games.map((game, i) => {
          const home = teams.find(team => team.attributes.number === game.home)
          const away = teams.find(team => team.attributes.number === game.away)
          return (
            <><select key={home.id} name={'team-'+ i} onChange={handleTeamChange} multiple={false} defaultValue={'DEFAULT'} className="input select-option">
              <option value='DEFAULT' disabled>Choose a team...</option>
              <option value={home.attributes.number}>{home.attributes.abrv}</option>
              <option value={away.attributes.number}>{away.attributes.abrv}</option>
            </select><br/></>
          )
        })}
        <input placeholder="tiebreaker" type="number" min="0" name="tiebreaker" value={formData.tiebreaker} onChange={handleTieChange} className="input"/><br/>
        <input type="submit" value="Submit Picks" disabled={!(teamsArr.length === week.attributes.games.length)} className="input"/>
        </form>
      </div>

    </div>
    </> :
    null
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""

  return {
    userId,
    formData: state.pickSheetForm,
    teamsArr: state.pickSheetFormTeams,
    teams: state.teams
  }
}

export default connect(mapStateToProps, {updatePickSheetForm, updatePickSheetFormTeams, removeTeamFromPickSheetForm, createPickSheet})(PickSheetForm)
