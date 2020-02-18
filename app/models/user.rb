class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :group_users, dependent: :destroy   #dependent: :destroyで関連モデルのレコードを削除
  has_many :groups, through: :group_users
  has_many :chats, dependent: :destroy
  has_one_attached :avatar

  validates_presence_of :avatar, allow_blank: true   #allow_blank: trueで空の入力（値無し）を許可する
  # validates :name, :email, :password, presence: true
  # validates :name,
  #   presence: {
  #     message: "名前を入力してください"
  #   }
  #   validates :name,
  #   uniqueness: {
  #     message: "既にアカウントが存在します"
  #   }
  #   validates :email,
  #   presence: {
  #     message: "メールアドレスを入力してください"
  #   }
  #   validates :email,
  #   uniqueness: {
  #     message: "既に使用されているメールアドレスです"
  #   }
  #   validates :password,
  #   presence: true,
  #   length: {
  #     minimum: 6,
  #     too_short: "パスワードは6文字以上です"
  #   }
  #   validates :password,
  #   uniqueness: {
  #     message: "既に使用されているパスワードです"
  #   }
end
