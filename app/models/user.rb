# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birthdate       :date             not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 
    
  validates :email, :first_name, :last_name, :birthdate, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true 
  validates :password, length: { minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
end
