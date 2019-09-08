class Api::V1::PicksController < ApplicationController
  before_action :set_pick, only: [:show, :update, :destroy]

  # GET /picks
  def index
    @picks = Pick.all

    render json: @picks
  end

  # GET /picks/1
  def show
    render json: @pick
  end

  # POST /picks
  def create
    @pick = Pick.new(pick_params)
    if @pick.save
      render json: PickSerializer.new(@pick), status: :created
    else
      resp = {
        error: @pick.errors.full_messages.to_sentence
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /picks/1
  def update
    if @pick.update(pick_params)
      render json: @pick
    else
      render json: @pick.errors, status: :unprocessable_entity
    end
  end

  # DELETE /picks/1
  def destroy
    @pick.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pick
      @pick = Pick.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pick_params
      params.require(:pick).permit(:tiebreaker, :user_id, :week_id, :points, :teams)
    end
end
