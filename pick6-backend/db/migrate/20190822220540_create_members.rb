class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members, id: false do |t|
      t.integer :user_id
      t.integer :group_id
    end
  end
end
