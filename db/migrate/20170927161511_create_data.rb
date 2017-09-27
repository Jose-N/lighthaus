class CreateData < ActiveRecord::Migration[5.1]
  def change
    create_table :data do |t|
      t.string :title, null: false
      t.string :description, default: ""
      t.integer :display_data, array: true,  null: false, default: []
      t.timestamps
    end
  end
end
