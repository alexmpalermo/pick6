import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentWeek } from '../actions/currentWeek.js'

class WeekShow extends React.Component {

  componentDidMount() {
    this.props.week && this.props.getCurrentWeek(this.props.week)
  }

  componentDidUpdate(prevProps) {
    this.props.week && !prevProps.week && this.props.getCurrentWeek(this.props.week)
  }

  render(){
    console.log(this.props)
    const { week } = this.props
    return (
      <div>
        <h3>WEEK ??</h3>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    weeks: state.myWeeks,
    group: state.group,
    week: state.currentWeek
  }
}

export default connect(mapStateToProps, { getCurrentWeek })(WeekShow)
