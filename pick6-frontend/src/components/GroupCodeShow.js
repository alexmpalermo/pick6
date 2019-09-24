import React from 'react'

const GroupCodeShow = ({group}) => {

  return (
    <div className="Group-code-box">
      <>
        <h4>Invite friends to join your group with this code:</h4>
        <h3>{group.attributes.code}</h3>
      </>
    </div>
  )
}

export default GroupCodeShow
