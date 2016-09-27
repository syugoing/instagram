class Photo < ApplicationRecord
  belongs_to :user
  mount_uploader :photodate, PhotodateUploader

end
