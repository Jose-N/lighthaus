class CreateUserDatas < ActiveRecord::Migration[5.1]
  def change
    create_table :user_datas do |t|
      t.integer :user_id, null: false
      t.integer :datum_id, null: false
    end
  end
end
