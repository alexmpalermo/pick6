import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentWeek } from '../actions/currentWeek.js'
import WeekTable from './WeekTable.js'
import PickSheetForm from './PickSheetForm.js'
import MyPicks from './MyPicks.js'

class WeekShow extends React.Component {


  componentDidMount() {
    this.props.getCurrentWeek(parseInt(this.props.match.params.id))
  }


  render(){

    const { week, teams, currentUser } = this.props

    return (
      week ?
      <><div>
        <h3>WEEK {week.attributes.number}</h3>
        <h4>Pick Sheet Form if they havent submitted yet</h4>
        {currentUser && currentUser.attributes.picks.find(p => p.week_id === parseInt(week.id)) ? null : <PickSheetForm week={week}/>}
        <h4>Show thier picks if they have already submitted</h4>
        <MyPicks week={week} />
        <h4>Show full table with everyones picks if week has started</h4>
        <WeekTable week={week}/>
      </div></> :
      null
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    week: state.currentWeek,
    teams: state.teams
  }
}

export default connect(mapStateToProps, { getCurrentWeek })(WeekShow)
