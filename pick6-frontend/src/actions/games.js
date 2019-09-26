import { resetAdminForm } from './adminForm.js'

// sync

export const setMyGames = games => {
  return {
    type: "SET_MY_GAMES",
    games
  }
}

export const updateGameSuccess = game => {
  return {
    type: "UPDATE_GAME",
    game
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

export const updateGame = (gameData) => {
  return dispatch => {
    const sendableGameData = {
      home: gameData.home,
      away: gameData.away,
      hscore: gameData.hscore,
      ascore: gameData.ascore,
      spread: gameData.spread,
      total: gameData.total,
      day: gameData.day,
      time: gameData.time,
      winner: gameData.winner
    }
    return fetch(`http://localhost:3001/api/v1/games/${gameData.gameId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableGameData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateGameSuccess(resp.data))
          dispatch(resetAdminForm())
          window.location.reload()
        }
      })
      .catch(console.log)

  }
}
