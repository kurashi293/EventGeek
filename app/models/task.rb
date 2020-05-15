class Task < ApplicationRecord
  has_many :task_users, dependent: :destroy
  has_many :users, through: :task_users
  has_many :task_images, dependent: :delete_all
<<<<<<< HEAD

  belongs_to :group
  belongs_to :category
  accepts_nested_attributes_for :task_images


  validates :title, :content, :deadline, :category_id, :user_ids, presence: true
  validates :title, length: { in: 1..100 }
  validates :content, length: { in: 1..1200 }
  validates :category_id, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 3 }
=======
  belongs_to :user
  belongs_to :group
  belongs_to :category
  accepts_nested_attributes_for :task_images
>>>>>>> master
end
