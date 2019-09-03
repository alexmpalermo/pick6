const initialState = {
  name: "",
  price: ""
}


export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EDIT_GROUP_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_EDIT_GROUP_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.groupFormData  
    default:
      return state
  }
}
