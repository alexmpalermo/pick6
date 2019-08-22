class GroupSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :code, :adminid
  attribute :users do |group|
    group.users.map do |user| {
      name: user.name,
      email: user.email,
      venmo: user.venmo
    }
    end
  end
end
