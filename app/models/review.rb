class Review < ApplicationRecord
  validates :rating, inclusion: { in: 1..5 }
  validates :beer_id, presence: true
  validates :user_id, presence: true

  belongs_to :beer
  belongs_to :user
  has_many :updowns
end
