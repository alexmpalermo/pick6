const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GAMES":
      return action.games
    case "UPDATE_GAME":
      return state.map(game => game.id === action.game.id ? action.game : game)
    default:
      return state
  }
}
