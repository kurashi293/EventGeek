class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.index :name, unique: true
      t.text :image
      t.text :notice
      t.references :group_category, foreign_key: true, null:false

      t.timestamps
    end
  end
end
