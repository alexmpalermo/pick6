const initialState = {
  code: "",
  users: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_JOIN_GROUP_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_JOIN_GROUP_FORM":
      return initialState
    default:
      return state
  }
}
