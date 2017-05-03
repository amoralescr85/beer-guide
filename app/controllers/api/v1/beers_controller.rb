class Api::V1::BeersController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:show]
  def show
    @reviews = []
    Beer.find(params[:id]).reviews.each do |review|
      review_to_send = {}
      review_to_send[:id] = review.id
      review_to_send[:body] = review.body
      review_to_send[:rating] = review.rating

      updowns = []
      review.updowns.each do |updown|
        thing = {}
        thing[:votes] = updown.vote
        thing[:reviewer] = updown.user_id
        updowns << thing
      end
      review_to_send[:votes] = updowns
      review_to_send[:created_at] = review.created_at
      @beerReviews << review_to_send
    end

    user = if user_signed_in?
      current_user.id
    else
      user_signed_in?
    end
    render json: { beerReviews: @beerReviews, user: user }
  end
end
