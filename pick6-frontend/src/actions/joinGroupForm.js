export const updateJoinGroupForm = (name, value) => {
  return {
    type: "UPDATE_JOIN_GROUP_FORM",
    formData: {name, value}
  }
}

export const resetJoinGroupForm = () => {
  return {
    type: "RESET_JOIN_GROUP_FORM"
  }
}
