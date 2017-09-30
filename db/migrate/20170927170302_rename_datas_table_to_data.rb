class RenameDatasTableToData < ActiveRecord::Migration[5.1]
  def change
    rename_table :user_datas, :user_data
  end
end
