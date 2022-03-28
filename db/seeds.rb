# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Client.destroy_all
#Client.reset_pk_sequence

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
Restaurant.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('restaurants')
Review.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')



user1 = User.create(username:'zachwerb', email:'werbo@gmail.com', password:'password123')
user2 = User.create(username:'Grace234', email:'grace@gmail.com', password:'password123')
user3 = User.create(username:'Pauly D', email:'mike@gmail.com', password: 'password123')
user4 = User.create(username:'MiketheSituation', email:'pauly@gmail.com', password:'password123')

rest1 = Restaurant.create!(
    name: 'moms spaghetti', 
    description: 'Here is a Restaurant that is really good, people have said the crem de la crem of what have you. it is solid', 
    hours: '4pm to 10pm',
    cuisine: 'italian',
    city: 'Portland'
)
file1 = URI.open('https://opentable-zach-seeds.s3.amazonaws.com/spaghetti.jpeg')
rest1.photos.attach(io: file1, filename: 'spaghetti.jpeg')

rest2 = Restaurant.create!(
    name: 'Super Kewl Restaurant', 
    description: 'The chef constantly travels into central oregon to get the best beef he possible. The burger is divine. Open all day basically!', 
    hours: '12pm to 10pm',
    cuisine: 'New American',
    city: 'Portland'
)
file2 = URI.open('https://opentable-zach-seeds.s3.amazonaws.com/coolfood.jpeg')
rest2.photos.attach(io: file2, filename: 'coolfood.jpeg')

rest3 = Restaurant.create!(
    name: 'Bam Sushi', 
    description: 'Amazing sushi place and affordable!', 
    hours: '12pm to 9pm',
    cuisine: 'Sushi',
    city: 'Portland'
)

file3 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/sushi.jpeg")
rest3.photos.attach(io: file3, filename: 'sushi.jpeg')

rev1 = Review.create!(
    body: 'food was excellent! filled my gullet with delicious sushi',
    rating: '5',
    author_id: user1.id,
    restaurant_id: rest3.id
)

rev2 = Review.create!(
    body: 'Ive got marinara on my sweater already',
    rating: '4',
    author_id: user1.id,
    restaurant_id: 'rest1.id'
)

rev3 = Review.create!(
    body: 'Food was not super kewl, i almost got sick.',
    rating: '1',
    author_id: user1.id,
    restaurant_id: rest2.id
)

rev4 = Review.create!(
    body: 'My friend almost got sick, but I did not, it was aight.',
    rating: '3',
    author_id: user2.id,
    restaurant_id: rest2.id
)

rev5 = Review.create!(
    body: 'Supreme Crunch rolls did me in.',
    rating: '5',
    author_id: user2.id,
    restaurant_id: rest3.id
)

rev6 = Review.create!(
    body: 'I love spaghetti, bro',
    rating: '5',
    author_id: user3.id,
    restaurant_id: rest1.id
)

rev7 = Review.create!(
    body: 'I love spaghetti also bro :-) ',
    rating: '5',
    author_id: user4.id,
    restaurant_id: rest1.id
)

