import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class WeekShow extends React.Component {



  render(){
    return (
      <h3>THE WEEK SHOW</h3>
    )
  }

}

const mapStateToProps = state => {
  return {
    weeks: state.myWeeks
  }
}

export default connect(mapStateToProps)(WeekShow)
