class GroupSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :code, :adminid
  attribute :users do |group|
    group.users.map do |user| {
      name: user.name,
      email: user.email,
      venmo: user.venmo,
      picks: user.picks
    }
    end
  end
  attribute :weeks do |group|
    group.weeks.map do |week| {
      number: week.number
    }
    end
  end
end
