json.user do
  json.email user.email
  json.username user.username
  json.id user.id
  json.liked_tracks liked_tracks.map { |track| track.id}
end
  json.signed_in true
