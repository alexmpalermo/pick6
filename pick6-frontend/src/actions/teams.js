// sync

export const setMyTeams = teams => {
  return {
    type: "SET_MY_TEAMS",
    teams
  }
}



// async

export const getMyTeams = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/teams", {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setMyTeams(resp.data))
      }
    })
    .catch(console.log)
  }
}
