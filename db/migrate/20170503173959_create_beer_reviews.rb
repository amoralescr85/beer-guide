class CreateBeerReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :beer_reviews do |t|
      t.string :body
      t.integer :rating, null:false
      t.belongs_to :beer, null:false
      t.belongs_to :user, null:false
      t.timestamps 

    end
  end
end
