# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  name                   :string
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
       :recoverable, :rememberable, :trackable, :validatable, :omniauthable,
       :omniauth_providers => [:facebook, :google_oauth2]

  # attr_accessible :email, :name, :password, :password_confirmation, :remember_me

  has_many :authorizations, :dependent => :destroy
  has_many :likes
  has_many :comments
  has_many :liked_tracks,
    through: :likes,
    source: :track

    def self.from_omniauth(auth)
      data = auth.info
      user = User.where(:email => data["email"]).first
      # Uncomment the section below if you want users to be created if they don't exist
      unless user
          user = User.create(name: data["name"],
             uid: data["uid"],
             provider: data["provider"],
             email: data["email"],
             password: Devise.friendly_token[0,20]
          )
      end
      user
    end
end
