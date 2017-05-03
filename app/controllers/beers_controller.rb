

class BeersController < ApplicationController
  #
  # def show
  #   @beer = Beer.find(params[:id])
  #   @reviews = @show.reviews.order("total_votes DESC")
  #   Beer.average_rating_calc(@show)
  # end

  def index
    results = BreweryDb.beers(:brewery_id => 459)
    @beers = results.beer
    # @beers = Beer.all
    # @shows =
    #   if params[:search]
    #     Beer.search(params[:search]).order("created_at DESC")
    #   else
    #     Beer.all.order("created_at ASC")
    #   end
  end
end
