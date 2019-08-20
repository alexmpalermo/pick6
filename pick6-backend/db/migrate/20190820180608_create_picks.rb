class CreatePicks < ActiveRecord::Migration[5.2]
  def change
    create_table :picks do |t|
      t.integer :tiebreaker
      t.integer :user_id
      t.integer :week_id
      t.integer :points

      t.timestamps
    end
  end
end
