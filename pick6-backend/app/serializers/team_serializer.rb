class TeamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :abrv
end
