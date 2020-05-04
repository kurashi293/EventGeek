class CreateStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :statuses do |t|
      t.references :user, foreign_key: true, unique: true, null:false
      t.references :company, foreign_key: true, null:false
      t.references :working_hour, foreign_key: true, null:false
      t.references :transceiver, foreign_key: true, null:false
      t.references :meal, foreign_key: true, null:false
      t.references :wear, foreign_key: true, null:false
      t.references :rank, foreign_key: true, null:false
      t.references :position, foreign_key: true, null:false
      t.references :group, foreign_key: true, null:false

      t.timestamps
    end
  end
end
