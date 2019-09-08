class ChangeGameWeekName < ActiveRecord::Migration[5.2]
  def change
    rename_table :week_games, :games_weeks
  end
end
