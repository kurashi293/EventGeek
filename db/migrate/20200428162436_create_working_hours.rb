class CreateWorkingHours < ActiveRecord::Migration[5.2]
  def change
    create_table :working_hours do |t|
      t.time :start_at, null: false
      t.time :end_at, null: false
      t.integer :break_at, null: false, default: 0

      t.timestamps
    end
  end
end
