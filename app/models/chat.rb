class Chat < ApplicationRecord
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader
  audited associated_with: :user

  audited
end
