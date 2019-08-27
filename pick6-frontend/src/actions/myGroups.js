// sync

export const setMyGroups = groups => {
  return {
    type: "SET_MY_GROUPS",
    groups
  }
}

export const clearGroups = () => {
  return {
    type: "CLEAR_GROUPS"
  }
}

// async

export const getMyGroups = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/groups", {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        console.log(resp.data)
        dispatch(setMyGroups(resp.data))
      }
    })
    .catch(console.log)
  }
}
