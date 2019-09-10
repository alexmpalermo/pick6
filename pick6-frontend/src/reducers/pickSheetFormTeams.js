const initialState = []


export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PICK_SHEET_FORM_TEAMS":
      return state.concat(action.team)
    case "REMOVE_TEAM_FROM_FORM":
      return state.filter(t => t === action.team ? false : true)  
    case "RESET_PICK_SHEET_FORM":
      return initialState
    default:
      return state
  }
}
