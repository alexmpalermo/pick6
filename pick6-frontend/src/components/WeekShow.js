import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const WeekShow = props => {




    return (
      <div>
        <h3>THE WEEK SHOW</h3>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    weeks: state.myWeeks
  }
}

export default connect(mapStateToProps)(WeekShow)
