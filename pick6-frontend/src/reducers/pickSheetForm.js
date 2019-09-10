const initialState = {
  tiebreaker: "",
  userId: "",
  weekId: ""
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
