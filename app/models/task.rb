class Task < ApplicationRecord
  has_many :task_users, dependent: :destroy
  has_many :users, through: :task_users
  has_many :task_images, dependent: :delete_all
  belongs_to :group
  belongs_to :category
  accepts_nested_attributes_for :task_images


  validates :title, :content, :deadline, presence: true
  validates :title, length: { maximum: 50, message: "は50文字以内で入力してください" }
  validates :content, length: { maximum: 1200, message: "は1200文字以内で入力してください" }
  validates :user_ids, presence: { message: "が選択されていません" }
  validates :category_id, presence: { message: "が選択されていません" }, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 3, message: "の有効な値を選択してください" }
end