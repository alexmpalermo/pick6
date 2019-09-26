class SetSpreadValues < ActiveRecord::Migration[5.2]
  def self.up
    Game.update_all("spread=handicap")
  end

  def self.down
  end
end
