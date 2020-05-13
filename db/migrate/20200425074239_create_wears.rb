class CreateWears < ActiveRecord::Migration[5.2]
  def change
    create_table :wears do |t|
      t.string :clothes, null: false

      t.timestamps
    end
  end
end
