const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_WEEKS":
      return action.weeks
    default:
      return state
  }
}
