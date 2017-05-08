class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.boolean :add_favorite, default:false

      t.belongs_to :user
      t.belongs_to :beer


    end
  end
end
