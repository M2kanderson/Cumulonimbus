class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def after_inactive_sign_up_path_for(resource)
    @user = User.last
    render :show
  end
end
