class BeersController < ApplicationController

  def index

    @beers = Beer.all
    @beer = Beer.new
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      flash[:notice] = 'Beer successfully saved!'
      redirect_to @beer
    else
      render action: 'new'
    end
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def destroy
    Beer.find(params[:id])
  end
  
  private

  def beer_params
    params.require(:beer).permit(:name, :description, :brewery, :style, :url)
  end


end
