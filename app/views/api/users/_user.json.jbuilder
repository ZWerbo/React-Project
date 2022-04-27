json.extract! user, :id, :username, :email, :first_name, :last_name


json.reviews do
    json.array! user.reviews, :body, :rating, :restaurant_name, :restaurant_id, :id
end



