@favorites.each do | favorite |
    json.set! favorite.id do
        json.partial! "favorite", favorite: favorite
        json.restaurant do
            json.extract! favorite.restaurant, :id, :name, :neighborhood, :cuisine
            json.photos_url favorite.restaurant.photos.map{|photo| url_for(photo)}
        end
    end
end

#@favorites.each do |favorite| 
#    json.set! favorite.id do
#        json.extract! favorite, :user_id, :restaurant_id, :restaurant_name
#    end
#end