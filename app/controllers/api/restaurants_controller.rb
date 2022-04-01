class Api::RestaurantsController < ApplicationController

    def index 
        @restaurants = Restaurant.all
        render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end


    private 
    def rest_params 
        params.require(:restaurant).permit(:name, :description, :hours, :cuisine, :city)
    end
end
