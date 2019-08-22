class GroupSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :code

end
