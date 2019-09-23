import React from 'react'
import {Link} from 'react-router-dom'
import GroupCodeShow from './GroupCodeShow.js'
import Weeks from './Weeks.js'
import { getMyWeeks } from '../actions/myWeeks.js'
import { connect } from 'react-redux'

class GroupShow extends React.Component {

  componentDidMount() {
    this.props.group && this.props.getMyWeeks(this.props.group)
  }

  componentDidUpdate(prevProps) {
    this.props.group && !prevProps.group && this.props.getMyWeeks(this.props.group)
  }

  render(){
    const { weeks, currentUser, group, match } = this.props

    return (
      <div className="group-show">
        {group && parseInt(group.attributes.adminid) === parseInt(currentUser.id) ?
          <><Link to={`/groups/${group.id}/edit`}>Edit this group</Link><GroupCodeShow group={group} /></> :
          null
        }

        {group ?
          <><h1 className="page-title">{group.attributes.name}</h1>
          <h4 className="page-title">${group.attributes.price}</h4>
          <div className="section shadow scroll_box" id="weeks-list">
            <Weeks group={group} weeks={weeks} match={match} />
          </div>
          </> :
          <p>This the the Group show with no group!</p>
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    weeks: state.myWeeks
  }
}

export default connect(mapStateToProps, { getMyWeeks })(GroupShow)
