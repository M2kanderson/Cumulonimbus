class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  respond_to :json
  # resource_name, :recall => "#{controller_path}#failure")
  #   sign_in_and_redirect(resource_name, resource)
  # end
  #
  # def sign_in_and_redirect(resource_or_scope, resource=nil)
  #   scope = Devise::Mapping.find_scope!(resource_or_scope)
  #   resource ||= resource_or_scope
  #   sign_in(scope, resource) unless warden.user(scope) == resource
  #   return render :json => {:success => true}
  # end

  def failure
    return render :json => {:success => false, :errors => ["Login failed."]}
  end

  def facebook
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in(@user)

      render :status => 200, :json => { :user => { :email => @user.email, :name => @user.name } }
    else
      render :status => 401, :json => { :errors => alert }
    end
  end

  def google_oauth2
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google"
      # sign_in_and_redirect @user, :event => :authentication
      sign_in @user, :event => :authentication
      render json: {id: @user.id, email: @user.email}
    else
      session["devise.google_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end
end
