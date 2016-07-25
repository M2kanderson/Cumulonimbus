json.id comment.id
json.user_id comment.user_id
json.user do
  json.username comment.user.username
end
json.age time_ago_in_words(comment.created_at)
json.track_id comment.track_id
json.body comment.body
