class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :day, :time, :winner, :total, :home, :away, :handicap, :hscore, :ascore
end
