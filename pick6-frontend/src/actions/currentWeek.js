// sync

export const setCurrentWeek = week => {
  return {
    type: "SET_CURRENT_WEEK",
    week
  }
}

// async

export const getCurrentWeek = (week) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/groups/${week.group_id}/weeks/${week.id}`, {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setCurrentWeek(resp.data))
      }
    })
    .catch(console.log)
  }
}
