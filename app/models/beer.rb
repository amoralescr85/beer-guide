class Beer < ApplicationRecord
  has_many :users, through: :favorites
  has_many :reviews
end
