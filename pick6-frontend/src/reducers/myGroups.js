export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_GROUPS":
      return action.groups
    case "ADD_GROUP":
      return state.concat(action.group)
    case "CLEAR_GROUPS":
      return []
    default:
      return state
  }
}
