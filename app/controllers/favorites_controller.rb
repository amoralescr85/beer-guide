class FavoritesController < ApplicationController
  def create
    @user = current_user
    @beer = Beer.find(params[:beer_id])
    @favorite = current_user.beers << @beer
    flash[:notice] = "This beer has been added to favorites."
    redirect_back(fallback_location: beer_path(@beer))
  end

  def destroy
    favorite = Favorite.find(params[:id])
    @beer = favorite.beer
    Favorite.destroy(params[:id])
    flash[:alert] = "This beer has been deleted from favorites."
    redirect_back(fallback_location: beer_path(@beer))
  end
end
