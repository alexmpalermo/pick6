class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :day, :time, :winner, :total, :home, :away, :handicap, :hscore, :ascore, :spread
  attribute :weeks do |game|
    game.weeks.map do |week| {
      number: week.number
    }
    end
  end
end
