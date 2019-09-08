class ChangeTeamPicksName < ActiveRecord::Migration[5.2]
  def change
    rename_table :team_picks, :teams_picks
  end
end
