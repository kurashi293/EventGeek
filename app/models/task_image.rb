class TaskImage < ApplicationRecord
  belongs_to :task
  mount_uploader :image, ImageUploader, dependent: :destroy
end
