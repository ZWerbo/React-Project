@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.extract! restaurant, :id, :name, :description, :hours, :cuisine, :city
        json.photos_url restaurant.photos.map{|photo| url_for(photo)}
    end
end