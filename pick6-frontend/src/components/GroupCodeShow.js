import React from 'react'

const GroupCodeShow = ({group}) => {

  return (
    <div className="Group-code-box">
      <>
        <p className="invite">Invite friends to join your group with this code:</p>
        <p className="code">{group.attributes.code}</p>
      </>
    </div>
  )
}

export default GroupCodeShow
