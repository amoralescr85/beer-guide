class AddBreweryToBeers < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :brewery, :string
  end
end
