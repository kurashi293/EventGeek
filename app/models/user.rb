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
  has_one  :status, dependent: :destroy
  has_one_attached :avatar


  validates_presence_of :avatar, allow_blank: true   #allow_blank: trueで空の入力（値無し）を許可する

  validates :name, presence: { message: "入力してください" }
  validates :name, uniqueness: { message: "既にアカウントが存在します" }
  validates :name, length: { maximum: 50, message: "50文字以内で入力してください" }

  validates :email, presence: { message: "入力してください" }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, format: { with: VALID_EMAIL_REGEX, message: "無効なメールアドレスです" }
  validates :email, uniqueness: { message: "既に存在するメールアドレスです" }

  # validates :password, presence: { message: "入力してください" }
  # validates :password, uniqueness: { message: "既に存在するパスワードです" }
  # validates :password, length: { minimum: 6, message: "6文字以上で入力してください" }
end
