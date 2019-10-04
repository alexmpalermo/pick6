import React from 'react'
import { Link } from 'react-router-dom'


const Groups = ({ groups }) => {
  // const num = () => {
  //   if (activateNumber()) {
  //     return 1
  //   } else {
  //     return 0
  //   }
  // }
// thinking in react
// the promise of a burger party

  const activateNumber = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');

  }

  return (
    groups.length > 0 ?
      <div>
        <><h2><u>My Groups:</u></h2>
        {groups.map((group) => {
          return (
            <p key={group.id} className="group-links">
              <Link to={`/groups/${group.id}`} >{group.attributes.name}</Link>
              ----<button onClick={activateNumber}>Click to make it #1</button>

            </p>
          )
          }
        )}
        </>
      </div> :
      <p>You currently have no groups! Create or join one below.</p>
  )
}

export default Groups
