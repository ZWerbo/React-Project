class Api::FavoritesController < ApplicationController
    #def index 
    #    @favorites = Favorite.all
    #    render :index
    #end

   def index
       if user_id 
           favorites = Favorite.where("user_id = ?", user_id)
           favorites.includes(:restaurant)
       end
       @favorites = favorites
       render :index
   end

    def create
        @favorite = Favorite.create(favorite_params)
        if @favorite.save
        render :show
        else 
            render json: @favorite.errors.full_messages, status: 401
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy!
        render :show
    end

   

    def favorite_params 
        params.require(:favorite).permit(:user_id, :restaurant_id)
    end

    def user_id
        params[:userId]
    end
end
