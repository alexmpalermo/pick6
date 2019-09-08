import { resetPickSheetForm } from './pickSheetForm.js'

// sync

export const addPick = pick => {
  return {
    type: "ADD_PICK",
    pick
  }
}

// async

export const createPickSheet = (pickData, history) => {
  return dispatch => {
    const sendablePickData = {
      pick: {
        tiebreaker: pickData.tiebreaker,
        user_id: pickData.user.id,
        week_id: pickData.week.id,
        teams: pickData.teams
      }
    }
    return fetch("http://localhost:3001/api/v1/picks", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendablePickData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        console.log(resp.data)
        dispatch(addPick(resp.data))
        dispatch(resetPickSheetForm())

      }
    })
    .catch(console.log)
  }
}

// history.push(`/weeks/${resp.data.id}`)
