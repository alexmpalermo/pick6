class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.date :day
      t.time :time
      t.string :winner
      t.integer :total
      t.string :home
      t.string :away
      t.integer :handicap
      t.integer :hscore
      t.integer :ascore

      t.timestamps
    end
  end
end
