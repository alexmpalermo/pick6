class Api::V1::WeeksController < ApplicationController
  before_action :set_week, only: [:show, :update, :destroy]

  # GET /weeks
  def index
    if logged_in?
      group = Group.find_by_id(params[:group_id])
      @weeks = group.weeks
      render json: WeekSerializer.new(@weeks), status: :ok
    else
      render json: {
        error: "You must be logged in to see weeks"
      }
    end
  end

  # GET /weeks/1
  def show
    @week = Week.find_by_id(params[:id])
    @group = Group.find_by_id(params[:group_id])
    if logged_in? && @group.users.include?(current_user)
      render json: WeekSerializer.new(@week), status: :ok
    else
      render json: {
        error: "You must be logged in to see this week"
      }
    end
  end

  # POST /weeks
  def create
    @week = Week.new(week_params)

    if @week.save
      render json: @week, status: :created, location: @week
    else
      render json: @week.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /weeks/1
  def update
    if @week.update(week_params)
      render json: @week
    else
      render json: @week.errors, status: :unprocessable_entity
    end
  end

  # DELETE /weeks/1
  def destroy
    @week.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_week
      @week = Week.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def week_params
      params.require(:week).permit(:number, :group_id)
    end
end
