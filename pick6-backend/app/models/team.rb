class Team < ApplicationRecord
  has_and_belongs_to_many :picks
  validates :name, :abrv, presence: true
end
