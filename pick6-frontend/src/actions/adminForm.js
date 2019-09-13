export const updateAdminForm = (name, value) => {
  return {
    type: "UPDATE_ADMIN_FORM",
    formData: {name, value}
  }
}

export const resetAdminForm = () => {
  return {
    type: "RESET_ADMIN_FORM"
  }
}

export const setAdminFormData = game => {
  const gameFormData = {
    home: game.attributes.home,
    away: game.attributes.away,
    hscore: game.attributes.hscore,
    ascore: game.attributes.ascore,
    handicap: game.attributes.handicap,
    total: game.attributes.total,
    day: game.attributes.day,
    time: game.attributes.time,
    winner: game.attributes.winner
  }
  return {
    type: "SET_ADMIN_FORM_DATA",
    gameFormData
  }
}
