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

export const setFormDataForEdit = group => {
  const groupFormData = {
    name: group.attributes.name,
    price: group.attributes.price
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    groupFormData
  }
}
