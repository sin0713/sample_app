class List < ApplicationRecord
  attachment :image
  validates :image_id, presence: true
  validates :title, presence: true
  validates :body, presence: true
end
