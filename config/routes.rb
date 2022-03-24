Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # namespace :api, defaults: {format: :json} do
  #   resource :user, only: [:create]
  #   resource :session, only: [:create, :destroy, :show]
  # end

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:index, :show]
    resources :reviews

  end

  root "static_pages#root"

end
