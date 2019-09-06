const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GAMES":
      return action.games
    default:
      return state
  }
}
