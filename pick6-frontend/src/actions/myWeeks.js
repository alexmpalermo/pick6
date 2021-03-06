// sync

export const setMyWeeks = weeks => {
  return {
    type: "SET_MY_WEEKS",
    weeks
  }
}

export const clearWeeks = () => {
  return {
    type: "CLEAR_WEEKS"
  }
}


// async

export const getMyWeeks = (group) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/groups/${group.id}/weeks`, {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(clearWeeks())
        dispatch(setMyWeeks(resp.data))
      }
    })
    .catch(console.log)
  }
}
