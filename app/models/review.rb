class Review < ApplicationRecord

    has_one :reviewer,
    foreign_key: :author_id,
    class_name: :User

    has_one :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    
end