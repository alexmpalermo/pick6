class Group < ApplicationRecord
  validates :name, :price, presence: true
  
  # Math.floor(Math.random()*16777215637).toString(16);
end
