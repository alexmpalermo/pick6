import React from 'react'
import {Link} from 'react-router-dom'
import { getMyWeeks } from '../actions/myWeeks.js'
import { connect } from 'react-redux'

class WeekShow extends React.Component {

  componentDidMount() {
    this.props.getMyWeeks()
  }

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

export default connect(mapStateToProps, { getMyWeeks })(WeekShow)
