class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @favorites = @user.favorites
  end

  def destroy
    if current_user
      User.find(params[:id]).destroy
      flash[:success] = "Beer deleted"
      redirect_to users_path, notice: "User Account Deleted"
    else
      redirect_to root_path
    end
  end

end
