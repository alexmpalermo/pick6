const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_TEAMS":
      return action.teams 
    default:
      return state
  }
}
