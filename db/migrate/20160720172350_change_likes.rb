class ChangeLikes < ActiveRecord::Migration
  def change
    remove_column :tracks, :likes
    add_column :tracks, :like_count, :integer, null: false
  end
end
