json.id user.id
json.email user.email
json.liked_tracks user.liked_tracks.map { |track| track.id}
