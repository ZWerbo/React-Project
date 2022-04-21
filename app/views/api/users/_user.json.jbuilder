json.extract! user, :id, :username, :email


json.reviews do
    json.array! user.reviews, :body, :rating, :restaurant_name, :restaurant_id, :id
end



