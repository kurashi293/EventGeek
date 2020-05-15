class CreatePositions < ActiveRecord::Migration[5.2]
  def change
    create_table :positions do |t|
      t.string :set_up
      t.string :opening
      t.string :start
      t.string :break
      t.string :end
      t.string :clean_up

      t.timestamps
    end
  end
end
