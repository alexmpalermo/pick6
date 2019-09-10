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
  attribute :picks do |user|
    user.picks.map do |pick| {
      tiebreaker: pick.tiebreaker,
      points: pick.points,
      week_id: pick.week_id,
      teams: pick.teams 
    }
    end
  end

end
