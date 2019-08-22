class Group < ApplicationRecord
  has_many :weeks
  has_many :users
  validates :name, :price, presence: true

  # Math.floor(Math.random()*16777215637).toString(16);
end
