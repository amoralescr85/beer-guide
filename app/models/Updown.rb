class Updown < ApplicationRecord
  belongs_to :user
  belongs_to :beerReview

  validates :user_id, presence: { message: "must be logged in" }
  validates :beerReview_id, presence: true
end
