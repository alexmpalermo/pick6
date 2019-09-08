class PickSerializer
  include FastJsonapi::ObjectSerializer
  attributes :tiebreaker, :user_id, :week_id, :points
  attribute :teams do |pick|
    pick.teams.map do |team| {
      name: team.name,
      abrv: team.abrv
    }
    end
  end
end
