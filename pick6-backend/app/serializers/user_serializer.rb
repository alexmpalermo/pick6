class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :venmo
end
