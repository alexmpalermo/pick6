import React from 'react'
import { connect } from 'react-redux'
import Groups from './Groups.js'
import GroupShow from './GroupShow.js'

const UserShow = (props) => {

  return (
    <div className="UserShow">
      {props.currentUser ? <h2>Welcome, {props.currentUser.name}!</h2> : null }
      <Groups groups={props.groups}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    groups: state.myGroups
  }
}

export default connect(mapStateToProps)(UserShow)


// {props.currentUser && props.currentUser.groups ?
//   <ul>
//     {props.currentUser.groups.map((group) => {
//       return <li key={group.code}>{group.name}</li>
//     })}
//   </ul> :
//   null }

// {props.groups ?
//   <ul>
//     {props.groups.map((group) => {
//       return <li key={group.attributes.code}>{group.attributes.name}</li>
//     })}
//   </ul> :
//   null }
