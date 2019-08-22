class Api::V1::SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      user_json = UserSerializer.new(@user).serialized_json
      render json: user_json, status: :ok
    else
      render json: {
        error: "Invalid Credentials"
      }
    end
  end

  def get_current_user
    if logged_in?
      render json: UserSerializer.new(current_user).serialized_json
    else
      render json: {
        error: "No one logged in"
      }
    end
  end

  def destroy
    session.clear
    render json: {
      notice: "Successfully logged out"
    }, status: :ok
  end

end
