// sync

export const setMyGames = games => {
  return {
    type: "SET_MY_GAMES",
    games
  }
}



// async

export const getMyGames = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/games", {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(setMyGames(resp.data))
      }
    })
    .catch(console.log)
  }
}
