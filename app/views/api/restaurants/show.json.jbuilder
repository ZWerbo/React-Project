json.extract! @restaurant, :id, :name, :description, :hours, :cuisine, :city
#json.reviews @restaurant, :id, :body, :rating
json.reviews @restaurant.reviews.map{ |review| review}
