class Datum < ApplicationRecord
  has_many :user_data
  has_many :users, through: :user_data

  validates :title, presence: true
  validates :display_data, presence: true
end
