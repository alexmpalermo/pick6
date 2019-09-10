class ChangePicksTeamsName < ActiveRecord::Migration[5.2]
  def change
    rename_table :teams_picks, :picks_teams
  end
end
