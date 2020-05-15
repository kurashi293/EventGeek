class Group < ApplicationRecord
  has_many :group_users, dependent: :destroy
  has_many :chats, dependent: :destroy
  has_many :users, through: :group_users
  has_many :tasks, dependent: :destroy
  has_many :statuses, dependent: :destroy
end