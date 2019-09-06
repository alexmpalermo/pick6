import React from 'react'
import { connect } from 'react-redux'

const MyPicks = ({week}) => {

  return (
    <>
      <div>
        <table>
          <thead>
          <tr>
            <th>Home</th>
            <th>Handicap</th>
            <th>Away</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>NE</td>
            <td>3.5</td>
            <td>NYJ</td>
          </tr>
          <tr>
            <td>OAK</td>
            <td>-2</td>
            <td>NYG</td>
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

export default connect(mapStateToProps)(MyPicks)
