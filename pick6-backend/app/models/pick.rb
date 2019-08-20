class Pick < ApplicationRecord
  belongs_to :user
  belongs_to :week
  has_many :teams
  validates :user_id, :week_id, :tiebreaker, presence: true
end
