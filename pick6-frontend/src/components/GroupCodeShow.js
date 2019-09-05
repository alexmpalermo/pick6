import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const GroupCodeShow = ({group}) => {

  return (
    <div className="code-show">
      <>
        <h4>The group code for {group.attributes.name} is: </h4>
        <h3>{group.attributes.code}</h3>
        <h4>Invite friends to join your group with this code!</h4>
        <Link to={`/groups/${group.id}`}>Go to group</Link>
      </>
    </div>
  )
}

const mapStateToProps = ({ group }) => {
  return {
    group
  }
}

export default connect(mapStateToProps)(GroupCodeShow)
