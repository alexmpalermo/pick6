import React from 'react'
import { connect } from 'react-redux'
import { getCurrentWeek } from '../actions/currentWeek.js'
import WeekTable from './WeekTable.js'
import PickSheetForm from './PickSheetForm.js'
import MyPicks from './MyPicks.js'
import moment from "moment";

class WeekShow extends React.Component {


  componentDidMount() {
    this.props.getCurrentWeek(parseInt(this.props.match.params.id))
  }


  render(){
    const { week, currentUser } = this.props
    const today = moment().format('YYYY-MM-DD')
    const showSomething = () => {
      if (week) {
        if (currentUser && currentUser.attributes.picks.find(p => p.week_id === parseInt(week.id))) {
          if (today > week.attributes.games[0].day || today === week.attributes.games[0].day){
            return <WeekTable week={week} />
          } else {
            return <MyPicks week={week} />

          }
        } else {
          return <PickSheetForm week={week}/>
        }
      } else {
        return null
      }
    }

    const idk = week ? console.log("day", moment().format('YYYY-MM-DD'), week.attributes.games[0].day) : null
    return (
      week ?
      <><div>
        <h3>WEEK {week.attributes.number}</h3>
        <span>{showSomething()}</span>
        <h4>Show full table with everyones picks if week has started</h4>

      </div></> :
      null
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    week: state.currentWeek
  }
}

export default connect(mapStateToProps, { getCurrentWeek })(WeekShow)
