class Reservation < ApplicationRecord

    
    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

    belongs_to :user,
        foreign_key: :restaurant_id,
        class_name: :User,
        optional: true
end
#<Reservation id: nil, user_id: 2, restaurant_id: 1, special_request: nil, email: "werbo@gmail.com", phone_number: nil, size: 2, date: "2022-04-27", time: "4:00", restaurant_name: "Moms Spaghetti">
#<Reservation id: nil, user_id: 2, restaurant_id: 6, special_request: nil, email: "werbo@gmail.com", phone_number: nil, size: 2, date: "2022-04-27", time: "4:00", restaurant_name: "3 Doors Down Café">\
# user_id: 2, restaurant_id: 6, special_request: nil, email: "werbo@gmail.com", phone_number: nil, size: 2, date: "2022-04-27", time: "4:00", restaurant_name: "3 Doors Down Café"
