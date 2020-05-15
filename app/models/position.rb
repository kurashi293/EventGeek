class Position < ApplicationRecord
  has_one :status


  validates :set_up, :opening, :start, :break, :end, :clean_up, length: { maximum: 100 }
end
