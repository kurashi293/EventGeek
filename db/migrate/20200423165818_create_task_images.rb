class CreateTaskImages < ActiveRecord::Migration[5.2]
  def change
    create_table :task_images do |t|
      t.text :image, foreign_key: true
      t.references :task, foreign_key: true

      t.timestamps
    end
  end
end
