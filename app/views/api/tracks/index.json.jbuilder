json.array! @tracks do |track|
  json.extract! track, :id, :title, :image_url, :audio_url, :like_count
end
