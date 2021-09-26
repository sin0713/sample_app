class RemoveBoFromLists < ActiveRecord::Migration[5.2]
  def change
    remove_column :lists, :bo, :string
  end
end
