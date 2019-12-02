class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :icon_image

  validates :name, :email, :password, presence: true
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
