class GroupUser < ApplicationRecord
  belongs_to :user
  belongs_to :group
  audited associated_with: :user
  audited associated_with: :group

  audited
end
