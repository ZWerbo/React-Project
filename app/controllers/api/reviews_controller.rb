class Api::ReviewsController < ApplicationController

 #  def index
 #      if params[:restaurant_id]
 #          @reviews = Review.where(restaurant_id: params[:restaurant_id])
 #      else    
 #          @reviews = Review.all 
 #      end
 #      render :index
 #  end

    def index 
        @reviews = Review.all
        render :index
    end

    def show 
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save!
            render show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render show
        end
    end

    def destroy 
        @review = Review.find(params[:id])
        @review.destroy!
        render :show
    end

    def new 
        @review = Review.new
        render :new
    end



    private 
    def review_params
        params.require(:review).permit(:body, :rating, :author_id, :restaurant_id)
    end
end
