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
    num_beds: 3, longitude: 40.730610, latitude: -73.935242, host_id: bob.id)

listing2 = Listing.create!(title: "Beautiful cottage", price: 200, guest_num: 3, description: "Beautiful cottage in the water",
    num_beds: 2, longitude: 20.730410, latitude: -71.235242, host_id: demo.id)

 