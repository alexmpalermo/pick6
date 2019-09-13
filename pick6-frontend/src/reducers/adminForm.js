const initialState = {
  home: "",
  away: "",
  hscore: "",
  ascore: "",
  handicap: "",
  total: "",
  day: "",
  time: "",
  winner: ""
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ADMIN_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_ADMIN_FORM":
      return initialState
    case "SET_ADMIN_FORM_DATA":
      return action.gameFormData
    default:
      return state
  }
}
