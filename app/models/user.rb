class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :group_users, dependent: :destroy   #dependent: :destroyで関連モデルのレコードを削除
  has_many :groups, through: :group_users
  has_many :task_users, dependent: :destroy
  has_many :tasks, through: :task_users
  has_many :chats, dependent: :destroy
  has_many  :statuses, dependent: :destroy

  mount_uploader :avatar, ImageUploader, dependent: :destroy


  validates_presence_of :avatar, allow_blank: true   #allow_blank: trueで空の入力（値無し）を許可する

  validates :name, presence: { message: "入力してください" }
  validates :name, uniqueness: { message: "既に存在するアカウントです" }
  validates :name, length: { maximum: 20, message: "20文字以内で入力してください" }
  VALID_NAME_REGEX = /\A[ぁ-んァ-ン一-龥\w\s]+\z/
  validates :name, format: { with: VALID_NAME_REGEX, message: "無効な名前です" }

  validates :email, presence: { message: "入力してください" }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, format: { with: VALID_EMAIL_REGEX, message: "無効なメールアドレスです" }
  validates :email, uniqueness: { message: "既に存在するメールアドレスです" }

  # validates :password, presence: { message: "入力してください" }
  # validates :password, uniqueness: { message: "既に存在するパスワードです" }
  # validates :password, length: { minimum: 6, message: "6文字以上で入力してください" }
end