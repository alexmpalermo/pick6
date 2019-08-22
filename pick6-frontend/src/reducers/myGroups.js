export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_GROUPS":
      return action.trips
    default:
      return state
  }
}
