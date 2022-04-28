json.extract! @restaurant, :id, :name, :description, :hours, :cuisine, :city, :neighborhood
#json.reviews @restaurant, :id, :body, :rating
json.reviews @restaurant.reviews.map{ |review| review}
json.photos_url @restaurant.photos.map{|photo| url_for(photo)}
