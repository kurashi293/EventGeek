class Status < ApplicationRecord
  belongs_to :company, dependent: :destroy
  belongs_to :working_hour, dependent: :destroy
  belongs_to :position, dependent: :destroy
  accepts_nested_attributes_for :company
  accepts_nested_attributes_for :working_hour
  accepts_nested_attributes_for :position


  # Rail5からbelongs_toのデフォルトが関連先の値を検査するようになった。Rails4と同様に関連先を検査しないようにするには、belongs_toにoptional: trueを付与する
  # 今回はoptional: trueを付与しなくても問題はないが、must existというエラーメッセージを表示したくないのでoptional: trueを設定
  belongs_to :transceiver, optional: true
  belongs_to :meal, optional: true
  belongs_to :wear, optional: true
  belongs_to :rank, optional: true
  belongs_to :user, optional: true
  belongs_to :group


  validates :user_id, :transceiver_id, :meal_id, :wear_id, :rank_id, presence: { message: "が選択されていません" }
  validates :transceiver_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 2, message: "の有効な値を選択してください" }
  validates :meal_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 9, message: "の有効な値を選択してください" }
  validates :wear_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 9, message: "の有効な値を選択してください" }
  validates :rank_id, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 6, message: "の有効な値を選択してください" }
end