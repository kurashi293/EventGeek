class TaskUser < ApplicationRecord
  belongs_to :user
  belongs_to :task
  audited associated_with: :user
  audited associated_with: :task

  audited
end
