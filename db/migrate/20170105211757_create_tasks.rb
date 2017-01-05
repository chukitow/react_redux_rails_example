class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string  :title
      t.text    :content
      t.boolean :completed
    end
  end
end
