class Company < ApplicationRecord
  has_one :status


  validates :name, length: { maximum: 100, message: "を100文字以内で入力してください" }
end
