export const updateEditGroupForm = (name, value) => {
  return {
    type: "UPDATE_EDIT_GROUP_FORM",
    formData: {name, value}
  }
}

export const resetEditGroupForm = () => {
  return {
    type: "RESET_EDIT_GROUP_FORM"
  }
}
