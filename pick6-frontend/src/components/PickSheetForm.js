import React from 'react'
import { connect } from 'react-redux'
import { updatePickSheetForm } from '../actions/pickSheetForm.js'
import { createPickSheet } from '../actions/myPicks.js'

const PickSheetForm = ({week, user, formData, history, updatePickSheetForm, createPickSheet}) => {

  const {tiebreaker, points, teams} = formData

  const handleChange = event => {
    const {name, value} = event.target
    updatePickSheetForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createPickSheet({
      ...formData,
      user,
      week
    }, history)
  }

  return (
    <>
    <h2>Week {week.attributes.number} Pick Sheet</h2>
    <div>
      <form onSubmit={handleSubmit}>
      <table>
        <thead>
        <tr>
          <th>Home</th>
          <th>Handicap</th>
          <th>Away</th>
          <th>My Picks</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>NE</td>
          <td>3.5</td>
          <td>NYJ</td>
          <td><input placeholder="group name" type="text" name="name" value={formData.name} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td>OAK</td>
          <td>-2</td>
          <td>NYG</td>
          <td></td>
        </tr>
        </tbody>
      </table>




        <input placeholder="weekly pick sheet price" type="number" min="0" name="price" value={formData.price} onChange={handleChange} /><br/>
        <input type="submit" value="Create Group" />
      </form>


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
