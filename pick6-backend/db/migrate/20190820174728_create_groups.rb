class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name
      t.integer :price
      t.string :code

      t.timestamps
    end
  end
end
