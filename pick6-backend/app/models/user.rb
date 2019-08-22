class User < ApplicationRecord
  has_secure_password
  has_many :picks
  has_many :groups
  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
