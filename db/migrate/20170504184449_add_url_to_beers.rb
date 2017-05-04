class AddUrlToBeers < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :url, :string
  end
end
