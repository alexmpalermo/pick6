class User < ApplicationRecord
  has_secure_password
  has_many :picks
  has_and_belongs_to_many :groups
  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
