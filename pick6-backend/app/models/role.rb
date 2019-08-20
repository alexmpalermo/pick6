class Role < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :user_id, :name, presence: true

end
