class Group < ApplicationRecord
  has_many :group_users, dependent: :destroy
  has_many :chats, dependent: :destroy
  has_many :users, through: :group_users
  has_many :tasks, dependent: :destroy
  has_many :statuses, dependent: :destroy

  belongs_to :group_category

  mount_uploader :image, ImageUploader


  validates :name, presence: { message: "入力してください" }
  validates :name, uniqueness: { message: "既に存在するグループです" }
  validates :name, length: { maximum: 50, message: "50文字以内で入力してください" }
  validates :group_category_id, presence: { message: "選択してください" }
  validates :group_category_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 14, message: "有効な値を選択してください" }
  validates :user_ids, presence: { message: "ユーザーが選択されていません" }
end