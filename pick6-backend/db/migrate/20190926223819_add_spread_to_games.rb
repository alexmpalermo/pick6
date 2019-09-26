class AddSpreadToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :spread, :real
  end
end
