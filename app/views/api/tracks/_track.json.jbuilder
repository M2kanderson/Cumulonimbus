json.extract! track, :id, :title, :image_url, :audio_url, :artist
json.user_likes track.user_likes.map { |user| user.id}
json.like_count track.user_likes.length
