class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :venmo
  has_many :groups, serializer: GroupSerializer

end
