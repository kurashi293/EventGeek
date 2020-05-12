class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.datetime :deadline, null: false
<<<<<<< Updated upstream:db/migrate/20200224073418_create_tasks.rb
      t.integer :category_id, null: false
      t.references :user, foreign_key: true
=======
      t.references :category, foreign_key: true, null: false
>>>>>>> Stashed changes:db/migrate/20200423165724_create_tasks.rb
      t.references :group, foreign_key: true

      t.timestamps
    end
  end
end
