const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_PICKS":
      return action.picks
    case "ADD_PICKS":
      return state.concat(action.pick)
    case "CLEAR_PICKS":
      return initialState
    case "UPDATE_PICKS":
      return state.map(pick => pick.id === action.pick.id ? action.pick : pick)
    case "DELETE_PICKS":
      return state.filter(pick => pick.id === action.pickId ? false : true)
    default:
      return state
  }
}
