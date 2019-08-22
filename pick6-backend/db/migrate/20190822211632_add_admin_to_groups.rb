class AddAdminToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :adminid, :integer
  end
end
