export const updatePickSheetFormTeams = team => {
  return {
    type: "UPDATE_PICK_SHEET_FORM_TEAMS",
    team
  }
}

export const removeTeamFromPickSheetForm = team => {
  return {
    type: "REMOVE_TEAM_FROM_FORM",
    team
  }
}
