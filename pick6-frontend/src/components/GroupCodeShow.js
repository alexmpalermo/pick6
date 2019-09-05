import React from 'react'

const GroupCodeShow = ({group}) => {

  return (
    <div className="code-show">
      <>
        <h4>The group code for {group.attributes.name} is: </h4>
        <h3>{group.attributes.code}</h3>
        <h4>Invite friends to join your group with this code!</h4>
      </>
    </div>
  )
}

export default GroupCodeShow
