class Review < ApplicationRecord

    belongs_to :reviewer,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    
end


