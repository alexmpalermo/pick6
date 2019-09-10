export const updatePickSheetForm = (name, value) => {
  return {
    type: "UPDATE_PICK_SHEET_FORM",
    formData: {name, value}
  }
}


export const resetPickSheetForm = () => {
  return {
    type: "RESET_PICK_SHEET_FORM"
  }
}
