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
bob= User.create!(email: "bob@bob.com", password: "123456", first_name: 'Bob', last_name: 'Bobson', birthdate: "1900-10-10")
felix= User.create!(email: "felix@bob.com", password: "123456", first_name: 'Felix', last_name: 'Dealix', birthdate: "1980-11-10")
sally= User.create!(email: "sally@bob.com", password: "123456", first_name: 'Sally', last_name: 'Alley', birthdate: "1970-10-11")

#LISTINGS
# New York City lat: 40.730610, lng: -73.935242 

ny_listing1 = Listing.create!(title: "My house!", price: 100, guest_num: 5, description: "My awesome lounge pad!",
    num_beds: 3, latitude: 40.830610, longitude: -73.935242, host_id: bob.id, city: 'New York City')

ny_listing2 = Listing.create!(title: "Beautiful cottage", price: 200, guest_num: 3, description: "Beautiful cottage in the water",
    num_beds: 2, latitude: 40.730510, longitude: -73.935242, host_id: demo.id, city: 'New York City')

ny_listing3 = Listing.create!(title: "Special Igloo", price: 300, guest_num: 2, description: "Come chill in my igloo!",
    num_beds: 3, latitude: 40.930610, longitude: -73.735242, host_id: felix.id, city: 'New York City')

ny_listing4 = Listing.create!(title: "Victorian Mansion", price: 700, guest_num: 12, description: "Come to our river spot and come fishing for salmon",
    num_beds: 6, latitude: 40.730410, longitude: -73.235242, host_id: sally.id, city: 'New York City')

ny_listing5 = Listing.create!(title: "Shack in the water", price: 50, guest_num: 1, description: "We can share this place together probably",
    num_beds: 1, latitude: 40.730410, longitude: -73.435242, host_id: demo.id, city: 'New York City')


# Austin lat: 30.266666	lng: -97.733330

austin_listing1 = Listing.create!(title: "My Barn!", price: 65, guest_num: 3, description: "Come visit the animals and enjoy true pastures",
    num_beds: 2, latitude: 30.266666, longitude: -97.733330, host_id: bob.id, city: 'Austin')

austin_listing2 = Listing.create!(title: "Mega Mansion", price: 1000, guest_num: 10, description: "The most beautiful home in the entirety of Austin, TX",
    num_beds: 6, latitude: 30.264676, longitude: -97.783530, host_id: demo.id, city: 'Austin')

austin_listing3 = Listing.create!(title: "Luscious Sand Castle", price: 300, guest_num: 5, description: "Experience true nature and true grit!",
    num_beds: 1, latitude: 30.564676, longitude: -97.983560, host_id: sally.id, city: 'Austin')

austin_listing4 = Listing.create!(title: "Beautiful Medeivel Castle", price: 2000, guest_num: 20, description: "Come experience the fear and excitement of the middle ages!",
    num_beds: 10, latitude: 30.764676, longitude: -97.753530, host_id: felix.id, city: 'Austin')

austin_listing5 = Listing.create!(title: "Newly Redone Townhouse", price: 250, guest_num: 4, description: "Live in a little slice of paradise here in the Longhorn state",
    num_beds: 3, latitude: 30.374676, longitude: -97.874530, host_id: bob.id, city: 'Austin')


# Boston lat: 42.346268, lng: -71.095764
boston_listing1 = Listing.create!(title: "Fenway Park", price: 10000, guest_num: 1000, description: "Live in baseball history at Fenway park",
    num_beds: 9, latitude: 42.346268, longitude: -71.095764, host_id: bob.id, city: 'Boston')
boston_listing2 = Listing.create!(title: "Citgo Sign", price: 1000, guest_num: 1, description: "No Greater landmark in Boston for views and history",
    num_beds: 0, latitude: 42.456268, longitude: -71.186764, host_id: demo.id, city: 'Boston')
boston_listing3 = Listing.create!(title: "Dorcester Beauty", price: 100, guest_num: 3, description: "Come experience the real Boston in Dorcester, Southie is a lie!",
    num_beds: 2, latitude: 42.457268, longitude: -71.115764, host_id: felix.id, city: 'Boston')
boston_listing4 = Listing.create!(title: "Condo in Back Bay", price: 300, guest_num: 4, description: "Check out pure luxury in the Back Bay of Boston",
    num_beds: 2, latitude: 42.236268, longitude: -71.575764, host_id: sally.id, city: 'Boston')
boston_listing5 = Listing.create!(title: "Southie Paradise", price: 50, guest_num: 1, description: "Come visit Southie, where you can get there but can't leave",
    num_beds: 1, latitude: 42.226268, longitude: -71.084764, host_id: bob.id, city: 'Boston')


# Chicago lat: 41.881832, lng: -87.623177
chicago_listing1 = Listing.create!(title: "Wrigleyville", price: 220, guest_num: 3, description: "Stay in the ivy in the outfield for as long as you like",
    num_beds: 2, latitude: 41.881832, longitude: -87.623177, host_id: bob.id, city: 'Chicago')
chicago_listing2 = Listing.create!(title: "Linkin Park Apartment", price: 320, guest_num: 5, description: "In the end it doesn't even matter, had to fall to lose it all",
    num_beds: 3, latitude: 41.771832, longitude: -87.533177, host_id: demo.id, city: 'Chicago')
chicago_listing3 = Listing.create!(title: "The Great Lake ", price: 70, guest_num: 2, description: "A great lake with an even greater view!",
    num_beds: 5, latitude: 41.981832, longitude: -87.723177, host_id: felix.id, city: 'Chicago')
chicago_listing4 = Listing.create!(title: "Deep Dish Driveup", price: 105, guest_num: 6, description: "Drive up and stay up when you hit the Deep Dish",
    num_beds: 2, latitude: 41.882632, longitude: -87.625377, host_id: sally.id, city: 'Chicago')
chicago_listing5 = Listing.create!(title: "Sears Tower", price: 420, guest_num: 6, description: "Stay in the highest place in Chicago, the Sears Tower",
    num_beds: 9, latitude: 41.991832, longitude: -87.553177, host_id: bob.id, city: 'Chicago')
# Miami lat:25.761681, lng: -80.191788
miami_listing1 = Listing.create!(title: "Waterside Apartment in Downtown Miami", price: 250, guest_num: 4, description: "See the Ocean from your room, hear it in a shell, great location",
    num_beds: 3, latitude: 25.761681, longitude: -80.191788, host_id: bob.id, city: 'Miami')
miami_listing2 = Listing.create!(title: "80's Style White Condo", price: 350, guest_num: 3, description: "Come experience a piece of history from the boon of Miami",
    num_beds: 1, latitude: 25.871681, longitude: -80.292788, host_id: demo.id, city: 'Miami')
miami_listing3 = Listing.create!(title: "Club DLUX", price: 550, guest_num: 10, description: "Come to the most happening spot...and stay when you're done partying!",
    num_beds: 5, latitude: 25.661681, longitude: -80.591788, host_id: felix.id, city: 'Miami')
miami_listing4 = Listing.create!(title: "Large Miami Beach Mansion", price: 800, guest_num: 6, description: "Stay in the most exclusive spot in Miami....may even see some stars",
    num_beds: 8, latitude: 25.761792, longitude: -80.191899, host_id: sally.id, city: 'Miami')
miami_listing5 = Listing.create!(title: "Dolphin's Home", price: 110, guest_num: 2, description: "Experience living with live dolphins (oxygen costs extra)",
    num_beds: 1, latitude: 25.561681, longitude: -80.991788, host_id: bob.id, city: 'Miami')
# Seattle lat: 47.608013, lng: -122.335167
seattle_listing1 = Listing.create!(title: "The Space Needle", price: 300, guest_num: 2, description: "Stay at the best view in the city",
    num_beds: 1, latitude: 47.608013, longitude: -122.335167, host_id: bob.id, city: 'Seattle')
seattle_listing2 = Listing.create!(title: "West Seattle Beauty", price: 150, guest_num: 4, description: "Experience the best part of the city with easy access to everywhere",
    num_beds: 3, latitude: 47.718013, longitude: -122.445167, host_id: demo.id, city: 'Seattle')
seattle_listing3 = Listing.create!(title: "Mariner Mansion", price: 500, guest_num: 8, description: "Meet your baseball favorites and live in luxury",
    num_beds: 5, latitude: 47.609123, longitude: -122.336277, host_id: felix.id, city: 'Seattle')
seattle_listing4 = Listing.create!(title: "Mercer Island", price: 50, guest_num: 6, description: "If you can make it here you can stay here, make sure to tuck and roll",
    num_beds: 3, latitude: 47.598013, longitude: -122.225167, host_id: sally.id, city: 'Seattle')
seattle_listing5 = Listing.create!(title: "Historic Colonial", price: 250, guest_num: 4, description: "A beautiful home that looks right into Canada!",
    num_beds: 3, latitude: 47.628213, longitude: -123.335167, host_id: bob.id, city: 'Seattle')
# San Francisco lat: 37.733795, lng: -122.446747
sanfran_listing1 = Listing.create!(title: "Colorful Home on the Hill", price: 250, guest_num: 4, description: "Gain some leg strength and stay on the hill! A quick roll to anywhere",
    num_beds: 2, latitude: 37.733795, longitude: -122.446747, host_id: bob.id, city: 'San Francisco')
sanfran_listing2 = Listing.create!(title: "Golden Gate Bridge", price: 900, guest_num: 2, description: "Very convienient location to the road and the best views in San Francisco",
    num_beds: 1, latitude: 37.833795, longitude: -122.486747, host_id: demo.id, city: 'San Francisco')
sanfran_listing3 = Listing.create!(title: "Alcatraz Prison", price: 2000, guest_num: 40, description: "Feel free to stay because the only way to leave is by raincoat raft",
    num_beds: 40, latitude: 37.744795, longitude: -122.556747, host_id: felix.id, city: 'San Francisco')
sanfran_listing4 = Listing.create!(title: "The Full House", price: 500, guest_num: 8, description: "The real house from Full House, it is up to you to fill it now!",
    num_beds: 5, latitude: 37.722795, longitude: -122.336747, host_id: sally.id, city: 'San Francisco')
sanfran_listing5 = Listing.create!(title: "Trolley Car Tiny House", price: 150, guest_num: 2, description: "Stay at the most unique and most San Francisco place of them all...a Trolley Car!",
    num_beds: 1, latitude: 37.733885, longitude: -122.448847, host_id: bob.id, city: 'San Francisco')