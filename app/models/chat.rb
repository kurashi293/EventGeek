class Chat < ApplicationRecord
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader, dependent: :destroy
end
