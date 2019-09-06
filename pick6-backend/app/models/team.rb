class Team < ApplicationRecord
  validates :name, :abrv, presence: true
end
