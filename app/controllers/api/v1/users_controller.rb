class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index]

  def index
    render json: User.all
  end

  def my_user
    current_user
  end
end
