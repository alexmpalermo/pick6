class ChangeMembersName < ActiveRecord::Migration[5.2]
  def change
    rename_table :members, :groups_users
  end
end
