class Api::V1::GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]

  # GET /groups
  def index
    if logged_in?
      @groups = current_user.groups
      render json: GroupSerializer.new(@groups), status: :ok
    else
      render json: {
        error: "You must be logged in to see groups"
      }
    end
  end

  # GET /groups/1
  def show
    @group = Group.find_by_id(params[:id])
    if logged_in? && @group.users.include?(current_user)
      render json: GroupSerializer.new(@group), status: :ok
    else
      render json: {
        error: "You must be logged in to see groups"
      }
    end
  end

  # POST /groups
  def create
    @group = Group.new(group_params)
    @group.users << User.find_by_id(params[:group][:adminid])
    if @group.save
      numbs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
      numbs.each do |n|
        @group.weeks.create(number: n)
      end
      add_games_to_weeks
      render json: GroupSerializer.new(@group), status: :created
    else
      resp = {
        error: @group.errors.full_messages.to_sentence
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  # POST /groups/join
  def join
   if @group = Group.find_by(code: params[:group][:code])
     @group.users << current_user unless @group.users.include?(current_user)
     render json:  GroupSerializer.new(@group), status: :ok
   else
     render json: {
       error: "This code doesn't match any groups"
     }, status: :unprocessable_entity
   end
 end

  # PATCH/PUT /groups/1
  def update
   if @group.update(group_params)
     render json:  GroupSerializer.new(@group), status: :ok
   else
     error_resp = {
       error: @group.errors.full_messages.to_sentence
     }
     render json: error_resp, status: :unprocessable_entity
   end
 end

  # DELETE /groups/1
  def destroy
    weeks = Week.all.select{|w| w.group_id == @group.id}
    ids = weeks.collect{|w| w.id }
    Week.destroy(ids)
    if @group.destroy
      render json: { data: "Group successfully destroyed" }, status: :ok
    else
      error_resp = {
        error: "Group not found and not destroyed"
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def group_params
      params.require(:group).permit(:name, :price, :code, :adminid)
    end

    def add_games_to_weeks
      w1 = @group.weeks.find_by(number: 1)
      w1.games << Game.all.select do |game|
        game.day.between?("2019-09-05".to_date, "2019-09-09".to_date)
      end
      w2 = @group.weeks.find_by(number: 2)
      w2.games << Game.all.select do |game|
        game.day.between?("2019-09-12".to_date, "2019-09-16".to_date)
      end
      w3 = @group.weeks.find_by(number: 3)
      w3.games << Game.all.select do |game|
        game.day.between?("2019-09-19".to_date, "2019-09-23".to_date)
      end
      w4 = @group.weeks.find_by(number: 4)
      w4.games << Game.all.select do |game|
        game.day.between?("2019-09-26".to_date, "2019-09-30".to_date)
      end
      w5 = @group.weeks.find_by(number: 5)
      w5.games << Game.all.select do |game|
        game.day.between?("2019-10-03".to_date, "2019-10-07".to_date)
      end
      w6 = @group.weeks.find_by(number: 6)
      w6.games << Game.all.select do |game|
        game.day.between?("2019-10-10".to_date, "2019-10-14".to_date)
      end
      w7 = @group.weeks.find_by(number: 7)
      w7.games << Game.all.select do |game|
        game.day.between?("2019-10-17".to_date, "2019-10-21".to_date)
      end
      w8 = @group.weeks.find_by(number: 8)
      w8.games << Game.all.select do |game|
        game.day.between?("2019-10-24".to_date, "2019-10-28".to_date)
      end
      w9 = @group.weeks.find_by(number: 9)
      w9.games << Game.all.select do |game|
        game.day.between?("2019-10-31".to_date, "2019-11-04".to_date)
      end
      w10 = @group.weeks.find_by(number: 10)
      w10.games << Game.all.select do |game|
        game.day.between?("2019-11-07".to_date, "2019-11-11".to_date)
      end
      w11 = @group.weeks.find_by(number: 11)
      w11.games << Game.all.select do |game|
        game.day.between?("2019-11-14".to_date, "2019-11-18".to_date)
      end
      w12 = @group.weeks.find_by(number: 12)
      w12.games << Game.all.select do |game|
        game.day.between?("2019-11-21".to_date, "2019-11-25".to_date)
      end
      w13 = @group.weeks.find_by(number: 13)
      w13.games << Game.all.select do |game|
        game.day.between?("2019-11-28".to_date, "2019-12-02".to_date)
      end
      w14 = @group.weeks.find_by(number: 14)
      w14.games << Game.all.select do |game|
        game.day.between?("2019-12-05".to_date, "2019-12-09".to_date)
      end
      w15 = @group.weeks.find_by(number: 15)
      w15.games << Game.all.select do |game|
        game.day.between?("2019-12-12".to_date, "2019-12-16".to_date)
      end
      w16 = @group.weeks.find_by(number: 16)
      w16.games << Game.all.select do |game|
        game.day.between?("2019-12-21".to_date, "2019-12-23".to_date)
      end
      w17 = @group.weeks.find_by(number: 17)
      w17.games << Game.all.select do |game|
        game.day.between?("2019-12-26".to_date, "2019-12-29".to_date)
      end
    end
end
