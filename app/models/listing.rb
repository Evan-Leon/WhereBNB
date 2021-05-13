# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :text             not null
#  price       :integer          not null
#  guest_num   :integer          not null
#  description :text             not null
#  num_beds    :integer          not null
#  longitude   :float            not null
#  latitude    :float            not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Listing < ApplicationRecord
  validates :title, :price, :guest_num, :description, :num_beds, :longitude, :latitude, :host_id, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

end
