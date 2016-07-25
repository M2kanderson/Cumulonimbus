# == Schema Information
#
# Table name: tracks
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  image_url      :string           not null
#  audio_url      :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  like_count     :integer          not null
#  artist         :string
#  comments_count :integer
#  play_count     :integer          default(0), not null
#

class Track < ActiveRecord::Base
  has_many :likes
  has_many :comments
  has_many :user_likes,
    through: :likes,
    source: :user


end
