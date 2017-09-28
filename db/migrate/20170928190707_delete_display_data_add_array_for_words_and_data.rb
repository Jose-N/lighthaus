class DeleteDisplayDataAddArrayForWordsAndData < ActiveRecord::Migration[5.1]
  def up
    remove_column(:data, :display_data)
    add_column(:data, :words, :string, array: true, nll: false)
    add_column(:data, :word_count, :integer, array: true, nll: false)
  end
end
