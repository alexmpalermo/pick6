class User < ApplicationRecord
  has_secure_password
  has_many :picks
  has_many :roles
  has_many :groups, through: :roles
  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
