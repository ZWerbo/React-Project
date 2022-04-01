class Api::ReservationsController < ApplicationController
    def index
        @reservations = Reservation.all 
        render :index
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end


    def create 
        @reservation = Reservation.new(reservation_params)
        if @reservation.save! 
            render :show
        else
            render json: ["invalid"]
        end
    end

    def update 
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
            render :show
        end
        
    end

    def destroy 
        @reservation = Reservation.find(params[:id])
        @reservation.destroy!
        render :show

    end



    private
    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :special_request, :email, :phone_number, :size, :date, :time)
    end
end
