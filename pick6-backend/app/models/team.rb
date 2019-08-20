class Team < ApplicationRecord
  has_many :games
  validates :name, :abrv, presence: true 
end
