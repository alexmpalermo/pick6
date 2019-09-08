const initialState = {
  name: "",
  price: "",
  code: "",
  admin: "",
  users: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_GROUP_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_GROUP_FORM":
      return initialState
    default:
      return state
  }
}
