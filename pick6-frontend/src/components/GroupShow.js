import React from 'react'
import {Link} from 'react-router-dom'
import EditGroupForm from './EditGroupForm.js'
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
    const { weeks, currentUser, group } = this.props
    return (
      <div className="group-show">
        {group && parseInt(group.attributes.adminid) === parseInt(currentUser.id) ?
          <><Link to={`/groups/${group.id}/edit`}>Edit this group</Link><GroupCodeShow group={group} /></> :
          null
        }

        {group ?
          <><h3>{group.attributes.name}</h3>
          <h4>${group.attributes.price}</h4>
          <Weeks group={group} weeks={weeks}/>
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
