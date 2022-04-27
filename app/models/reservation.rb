class Reservation < ApplicationRecord

    
    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

    belongs_to :user,
        foreign_key: :restaurant_id,
        class_name: :User
end