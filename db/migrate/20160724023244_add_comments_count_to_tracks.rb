class AddCommentsCountToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :comments_count, :integer
  end
end
