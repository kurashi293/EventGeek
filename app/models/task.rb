class Task < ApplicationRecord
  has_many :task_users, dependent: :destroy
  has_many :users, through: :task_users
  has_many :task_images, dependent: :delete_all
  belongs_to :user
  belongs_to :group
  belongs_to :category
  accepts_nested_attributes_for :task_images
end
