class CreateWeeks < ActiveRecord::Migration[5.2]
  def change
    create_table :weeks do |t|
      t.integer :number
      t.integer :group_id

      t.timestamps
    end
  end
end
