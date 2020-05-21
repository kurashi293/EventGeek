class WorkingHour < ApplicationRecord
  has_one :status


  validates :start_at, :end_at, :break_at, presence: { message: "入力してください" }
  validates :break_at, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 600 }
end
