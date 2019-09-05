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
        @group.week.create(number: n)
      end
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
end
