class WeekSerializer
  include FastJsonapi::ObjectSerializer
  attributes :number
  belongs_to :group 
end
