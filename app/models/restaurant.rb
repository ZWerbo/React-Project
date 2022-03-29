class Restaurant < ApplicationRecord
    validates :name, :description, :hours, :cuisine, :city, presence: true

    has_many_attached :photos

    has_many :reviews,
        foreign_key: :restaurant_id,
        class_name: :Review

    has_many :reservations,
        foreign_key: :restaurant_id,
        class_name: :Reservation

    

end