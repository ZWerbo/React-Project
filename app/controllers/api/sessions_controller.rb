class Api::SessionsController < ApplicationController


    def show 
        @user = User.find(params[:id])
        render :show

    end

    def create
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Username or password can't be blank"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else 
            render json: ['NoOneIsInIt'], status: 404
        end
    end

    
end
