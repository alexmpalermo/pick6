class CreateTeamPicks < ActiveRecord::Migration[5.2]
  def change
    create_table :team_picks, id: false do |t|
      t.string :team_id
      t.string :pick_id

      t.timestamps
    end
  end
end
