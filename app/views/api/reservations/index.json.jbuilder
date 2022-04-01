@reservations.each do |reservation| 
    json.set! reservation.id do
        json.extract! reservation, :id, :user_id, :restaurant_id, :special_request, :email, :phone_number, :size, :date, :time
    end
end