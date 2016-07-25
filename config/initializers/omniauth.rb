Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
  # provider :google_oauth2, '103867363030-iq1ait30ssbtobrqhcmugffnjgvsok9d.apps.googleusercontent.com', 'vzjClQvfpNRFwI4to6o6QEId', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
