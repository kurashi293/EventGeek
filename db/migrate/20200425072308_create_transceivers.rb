class CreateTransceivers < ActiveRecord::Migration[5.2]
  def change
    create_table :transceivers do |t|
      t.string :state, null: false

      t.timestamps
    end
  end
end
