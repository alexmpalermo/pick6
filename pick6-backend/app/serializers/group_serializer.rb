class GroupSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :code, :adminid
  has_many :users, serializer: UserSerializer
end
