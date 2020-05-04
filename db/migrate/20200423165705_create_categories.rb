class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.string :ancestry, index: true     #gem "ancestry"を使用する記述

      t.timestamps
    end
  end
end
