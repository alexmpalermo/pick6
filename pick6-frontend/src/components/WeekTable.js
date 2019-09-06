import React from 'react'
import { connect } from 'react-redux'

const WeekTable = ({week}) => {

  return (
    <>
      <div>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
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

export default connect(mapStateToProps)(WeekTable)
