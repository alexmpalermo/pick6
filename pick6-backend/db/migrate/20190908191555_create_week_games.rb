class CreateWeekGames < ActiveRecord::Migration[5.2]
  def change
    create_table :week_games, id: false do |t|
      t.string :week_id
      t.string :game_id

      t.timestamps
    end
  end
end
