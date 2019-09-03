const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GROUPS":
      return action.groups
    case "ADD_GROUP":
      return state.concat(action.group)
    case "CLEAR_GROUPS":
      return initialState
    case "UPDATE_GROUP":
      return state.map(group => group.id === action.group.id ? action.group : group)
    case "DELETE_GROUP":
      return state.filter(group => group.id === action.groupId ? false : true)
    default:
      return state
  }
}
