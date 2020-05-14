class Status < ApplicationRecord
  belongs_to :company
  belongs_to :working_hour
  belongs_to :position
  accepts_nested_attributes_for :company
  accepts_nested_attributes_for :working_hour
  accepts_nested_attributes_for :position

  belongs_to :transceiver
  belongs_to :meal
  belongs_to :wear
  belongs_to :rank
  belongs_to :user
  belongs_to :group


  validates :user_id, uniqueness: { message: "既に作成されたユーザーです" }
  validates :user_id, :transceiver_id, :meal_id, :wear_id, :rank_id,  presence: { message: "選択してください" }, numericality: { only_integer: true, message: "無効な値です" }
  validates :transceiver_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 2, message: "有効な値を選択してください" }
  validates :meal_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 9, message: "有効な値を選択してください" }
  validates :wear_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 9, message: "有効な値を選択してください" }
  validates :rank_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 6, message: "有効な値を選択してください" }
end