export const updateNewGroupForm = (name, value) => {
  return {
    type: "UPDATE_NEW_GROUP_FORM",
    formData: {name, value}
  }
}

export const resetNewGroupForm = () => {
  return {
    type: "RESET_NEW_GROUP_FORM"
  }
}
