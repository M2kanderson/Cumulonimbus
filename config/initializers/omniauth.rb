Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
  provider :facebook, ENV["1790155654560761"], ENV["145948dfa9675d0f8cfc882e41539367"]
end
