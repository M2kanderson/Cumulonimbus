class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable,
         :omniauth_providers =>[:facebook]

  # attr_accessible :email, :name, :password, :password_confirmation, :remember_me

  has_many :authorizations, :dependent => :destroy
end
