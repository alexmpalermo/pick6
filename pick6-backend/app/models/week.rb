class Week < ApplicationRecord
  has_and_belongs_to_many :games
  has_many :picks
  belongs_to :group
  validates :number, :group_id, presence: true
end
