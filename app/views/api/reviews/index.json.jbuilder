
    @reviews.each do |review| 
        json.set! review.id do
            json.extract! review, :id, :body, :rating, :author_id, :restaurant_id
            json.restaurant_name review.restaurant.name
        
        end
    end
#json.reviewer do 
#    json.partial! 'api/users/user', user: @review.reviewer
#end