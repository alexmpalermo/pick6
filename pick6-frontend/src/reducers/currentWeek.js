

export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_WEEK":
      return action.week
    default:
      return state
  }
}
