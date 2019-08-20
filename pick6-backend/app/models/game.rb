class Game < ApplicationRecord
  has_many :weeks
  validates :day, :time, :home, :away, presence: true
end
