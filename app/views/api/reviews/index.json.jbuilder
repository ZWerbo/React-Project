
    @reviews.each do |review| 
        json.set! review.id do
            json.extract! review, :id, :body, :rating, :author_id, :restaurant_id
        
        end
    end
#json.reviewer do 
#    json.partial! 'api/users/user', user: @review.reviewer
#end