class RenameBeerReviews < ActiveRecord::Migration[5.0]
  def up
    rename_table :beer_reviews, :reviews
  end

  def down
    rename_table :reviews, :beer_reviews
  end
end
