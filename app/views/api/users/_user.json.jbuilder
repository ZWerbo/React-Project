json.extract! user, :id, :username, :email
#user.reviews.each do |review| 
#    json.extract review
#end 

json.reviews do 
    json.array! user.reviews, :body, :rating
end


#json.partial! "api/users/user", user: @user