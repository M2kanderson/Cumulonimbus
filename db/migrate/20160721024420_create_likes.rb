class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null:false
      t.integer :track_id, null: false
      t.timestamps null: false
    end
    add_index :likes, [:track_id]
    add_index :likes, [:user_id, :track_id], unique: true
    add_index :likes, [:user_id]
  end
end
