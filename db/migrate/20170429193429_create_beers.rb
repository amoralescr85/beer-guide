class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :name, null:false
      t.string :description

      t.timestamps


    end
  end
end
