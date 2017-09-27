class UserDatum < ApplicationRecord
  belongs_to :datum
  belongs_to :user

  validates :user_id, presence: true
  validates :datum_id, presence: true
end
