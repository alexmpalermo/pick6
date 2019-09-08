import React from 'react'
import { connect } from 'react-redux'
import { updatePickSheetForm } from '../actions/pickSheetForm.js'
import { createPickSheet } from '../actions/myPicks.js'

const PickSheetForm = ({week, user}) => {

  return (
    <>
      <div>
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
            <td></td>
          </tr>
          <tr>
            <td>OAK</td>
            <td>-2</td>
            <td>NYG</td>
            <td></td>
          </tr>
          </tbody>
        </table>
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
