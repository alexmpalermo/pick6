class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :venmo
  attribute :groups do |user|
    user.groups.map do |group| {
      name: group.name,
      price: group.price,
      code: group.code,
      adminid: group.adminid
    }
    end
  end 

end
