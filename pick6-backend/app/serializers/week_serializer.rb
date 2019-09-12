class WeekSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number
  belongs_to :group
  attribute :games do |week|
    week.games.map do |game| {
      day: game.day,
      time: game.time,
      winner: game.winner.to_i,
      total: game.total,
      home: game.home.to_i,
      away: game.away.to_i,
      handicap: game.handicap,
      hscore: game.hscore,
      ascore: game.ascore
    }
    end
  end
  attribute :picks do |week|
    week.picks.map do |pick| {
      tiebreaker: pick.tiebreaker,
      points: pick.points,
      userId: pick.user_id,
      teams: pick.teams,
      username: pick.user.name
    }
    end
  end
end
