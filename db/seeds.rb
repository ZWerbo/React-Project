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
Reservation.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('reservations')
Favorite.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('favorites')





user1 = User.create(username:'zachwerb', email:'werbo@gmail.com', password:'password123', first_name: 'Zach', last_name: 'Werbalowsky')
user2 = User.create(username:'Grace234', email:'grace@gmail.com', password:'password123',first_name: 'Grace', last_name: 'Mercer')
user3 = User.create(username:'Pauly D', email:'mike@gmail.com', password: 'password123', first_name: 'Pauly', last_name: 'D Angelo')
user4 = User.create(username:'Mike the Situation', email:'pauly@gmail.com', password:'password123', first_name: 'Mike', last_name: 'Situacion')

rest1 = Restaurant.create!(
    name: 'Moms Spaghetti', 
    description: 'Here is a Restaurant that is really good, people have said the crem de la crem of what have you. it is solid', 
    hours: '4pm to 10pm',
    cuisine: 'italian',
    city: 'Portland',
    neighborhood: 'Southeast'
)

rest2 = Restaurant.create!(
    name: 'Guada', 
    description: 'The chef constantly travels into central oregon to get the best beef he possible. The burger is divine. Open all day basically!', 
    hours: '12pm to 10pm',
    cuisine: 'Mexican',
    city: 'Portland',
    neighborhood: 'Southeast'
    )
    
    
    
rest3 = Restaurant.create!(
    name: 'Bam Sushi', 
    description: 'Amazing sushi place and affordable!', 
    hours: '12pm to 9pm',
    cuisine: 'Sushi',
    city: 'Portland',
    neighborhood: 'Northeast'
    )
        
rest4 = Restaurant.create!(
    name: 'Borger World', 
    description: 'No frills burger joint! affordable and delicious!', 
    hours: '12pm to 9pm',
    cuisine: 'Burger',
    city: 'Portland',
    neighborhood: 'Southwest'
    )

rest5 = Restaurant.create!(
    name: 'Cibo', 
    description: 'We are a neighborhood Italian restaurant with wood-fired pizza, housemade pastas, delicious cocktails and dessert. Located on the corner of Division and 35th Place, we are in the heart of SE Portland.
    Thank you for all of the continued support you have shown us during all the ups and downs of 2020. We look forward to serving you in whatever new capacities we are able to safely do so.', 
    hours: '4pm to 9pm',
    cuisine: 'Italian',
    city: 'Portland',
    neighborhood: 'Southeast'
    )

rest6 = Restaurant.create!(
    name: '3 Doors Down Café',
    description: 'Inclusive from the moment you grace the doorway, 
    3 Doors Down Café and Lounge has a keen acumen for speeding up your wind down, 
    flipping the switch from maddening day to welcoming  respite.  A playful, thoughtful, 
    and engaging dining experience begins with our dynamic wine list or a creative cocktail, 
    then flows effortlessly to the inventive starters, house made pastas or perfectly grilled fish and meats.  
    3 Doors Down Café offers a doff of the hat to Mother Italy and a harmonious affair  with locally procured Pacific Northwest cuisine. ',
    hours: '5pm to 9pm',
    cuisine: 'Italian',
    city: 'Portland',
    neighborhood: 'Southeast'
)
        
        file1 = URI.open('https://opentable-zach-seeds.s3.amazonaws.com/pastagum.jpg')
        rest1.photos.attach(io: file1, filename: 'pastagum.jpg')
        file2 = URI.open('https://opentable-zach-seeds.s3.amazonaws.com/italian2.jpg')
        rest1.photos.attach(io: file2, filename: 'italian2.jpg')
        
        file3 = URI.open('https://opentable-zach-seeds.s3.amazonaws.com/mexicanfood.jpg')
        rest2.photos.attach(io: file3, filename: 'mexicanfood.jpeg')
        file4 = URI.open('https://opentable-zach-seeds.s3.amazonaws.com/mexicanfood2.jpg')
        rest2.photos.attach(io: file4, filename: 'mexicanfood2.jpg')
        
        file5 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/sushi.jpeg")
        rest3.photos.attach(io: file5, filename: 'sushi.jpeg')
        file6 =  URI.open("https://opentable-zach-seeds.s3.amazonaws.com/sushipano.jpeg")
        rest3.photos.attach(io: file6, filename: 'sushipano.jpeg')
        
        file7 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/smallborger.jpg")
        rest4.photos.attach(io: file7, filename: 'smallborger.jpg')
        file8 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/bigborger.jpg")
        rest4.photos.attach(io: file8, filename: 'bigborger.jpg')

        file9 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/gumbamenu.jpeg")
        rest1.photos.attach(io: file9, filename: 'gumbamenu.jpeg')

        file10 = URI.open('https://opentable-zach-seeds.s3.amazonaws.com/mexicanmenu.jpg')
        rest2.photos.attach(io: file10, filename: 'mexicanmenu.jpg')
        
        file11 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/sushimenu.jpg")
        rest3.photos.attach(io: file11, filename: 'sushimenu.jpg')

        file12 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/burgersmenu.jpg")
        rest4.photos.attach(io: file12, filename: 'burgersmenu.jpg')

        file13 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/cibopizzasmall.jpg")
        rest5.photos.attach(io: file13, filename: "cibopizzasmall.jpg")

        file14 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/CiboPizzaBig.jpg")
        rest5.photos.attach(io: file14, filename: "CiboPizzaBig.jpg")

        file15 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/cibomenu.jpg")
        rest5.photos.attach(io: file15, filename: "cibomenu.jpg")

        file16 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/3doors.jpeg")
        rest6.photos.attach(io: file16, filename: "3doors.jpeg")

        file17 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/3doorsbig.jpg")
        rest6.photos.attach(io: file17, filename: "3doorsbig.jpg")

        file18 = URI.open("https://opentable-zach-seeds.s3.amazonaws.com/3doorsmenu.jpg")
        rest6.photos.attach(io: file18, filename: "3doorsmenu.jpg")

        
rev1 = Review.create!(
    body: 'food was excellent! filled my gullet with delicious sushi',
    rating: '5',
    author_id: user1.id,
    restaurant_id: rest3.id,
    restaurant_name: rest3.name
    )

rev2 = Review.create!(
    body: 'Ive got marinara on my sweater already',
    rating: '4',
    author_id: user1.id,
    restaurant_id: rest1.id,
    restaurant_name: rest1.name

)

rev3 = Review.create!(
    body: 'Food was not super kewl, i almost got sick.',
    rating: '1',
    author_id: user1.id,
    restaurant_id: rest2.id,
    restaurant_name: rest2.name
)

rev4 = Review.create!(
    body: 'My friend almost got sick, but I did not, it was aight.',
    rating: '3',
    author_id: user2.id,
    restaurant_id: rest2.id,
    restaurant_name: rest2.name
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
    restaurant_id: rest1.id,
    restaurant_name: rest1.name
)

rev7 = Review.create!(
    body: 'I love spaghetti also bro :-) ',
    rating: '5',
    author_id: user4.id,
    restaurant_id: rest1.id,
    restaurant_name: rest1.name
)

