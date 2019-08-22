export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_GROUPS":
      return action.groups
    default:
      return state
  }
}
