class Game < ApplicationRecord
  has_and_belongs_to_many :weeks
  validates :day, :time, :home, :away, presence: true
end
