# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all


#Users

demo= User.create!(email: "DemoUser@wherebnb.com", password: "123456", first_name: 'Demo', last_name: 'User', birthdate: "1990-10-10")
bob= User.create!(email: "bob", password: "123456", first_name: 'Bob', last_name: 'Bobson', birthdate: "1990-10-10")


listing1 = Listing.create!(title: "my house!", price: 100, guest_num: 5, description: "My awesome lounge pad!",
    num_beds: 3, latitude: 40.730610, longitude: -73.935242, host_id: bob.id)

listing2 = Listing.create!(title: "Beautiful cottage", price: 200, guest_num: 3, description: "Beautiful cottage in the water",
    num_beds: 2, latitude: 40.730410, longitude: -73.235242, host_id: demo.id)

listing3 = Listing.create!(title: "Special Igloo", price: 300, guest_num: 2, description: "Come chill in my igloo!",
    num_beds: 3, latitude: 40.930610, longitude: -73.735242, host_id: bob.id)

listing4 = Listing.create!(title: "Victorian Mansion", price: 700, guest_num: 12, description: "Come to our river spot and come fishing for salmon",
    num_beds: 6, latitude: 40.730410, longitude: -73.235242, host_id: demo.id)

listing5 = Listing.create!(title: "Shack in the water", price: 50, guest_num: 11, description: "We can share this place together probably",
    num_beds: 6, latitude: 40.430410, longitude: -73.435242, host_id: demo.id)
#  New York City
    # lat: 40.730610, 
    #     lng: -73.935242