class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.string :audio_url, null: false
      t.integer :likes, null: false

      t.timestamps null: false
    end
  end
end
