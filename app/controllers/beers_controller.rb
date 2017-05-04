class BeersController < ApplicationController

  def show
    @beer = Beer.find(params[:id])
  end

  def index

    @beers = Beer.all

    end

end
