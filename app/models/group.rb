class Group < ApplicationRecord
  has_many :group_users, dependent: :destroy
  has_many :chats, dependent: :destroy
  has_many :users, through: :group_users
  has_many :tasks, dependent: :destroy
  has_many :statuses, dependent: :destroy

  belongs_to :group_category, optional: true

  mount_uploader :image, ImageUploader, dependent: :destroy


  validates :name, presence: true
  validates :name, uniqueness: { message: "は既に使用されています" }
  validates :name, length: { maximum: 35, message: "は35文字以内で入力してください" }
  validates :group_category_id, presence: { message: "が選択されていません" }
  validates :group_category_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 14, message: "の有効な値を選択してください" }
  validates :user_ids, presence: { message: "が選択されていません" }
end