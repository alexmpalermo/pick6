import React from 'react'
import { connect } from 'react-redux'

const WeekTable = ({week, user}) => {

  return (
    <>
    <div>
      <h2>WEEK {week.attributes.number} SPREADSHEET</h2>
      <div>
        <table>
          <tbody>
          <tr>
            <td><strong>HOME</strong></td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>50</td>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>Smith</td>
            <td>50</td>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td><strong>SPREAD</strong></td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td><strong>AWAY</strong></td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td><strong>WINNING TEAM</strong></td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td><strong>NAME</strong></td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          
          </tbody>
        </table>
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

export default connect(mapStateToProps)(WeekTable)
