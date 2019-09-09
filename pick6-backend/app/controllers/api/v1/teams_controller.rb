class Api::V1::TeamsController < ApplicationController


  # GET /teams
  def index
    @teams = Team.all
    render json: TeamSerializer.new(@teams), status: :ok
  end

  # GET /teams/1
  def show
    @team = Team.find_by_id(params[:id])
    render json: TeamSerializer.new(@team), status: :ok
  end

end
