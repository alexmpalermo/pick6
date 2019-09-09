class AddNumberToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :number, :integer
  end
end
