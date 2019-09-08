const initialState = {
  tiebreaker: "",
  user_id: "",
  week_id: "",
  points: "",
  teams: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PICK_SHEET_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_PICK_SHEET_FORM":
      return initialState
    default:
      return state
  }
}
