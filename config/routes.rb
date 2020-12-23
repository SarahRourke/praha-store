Rails.application.routes.draw do
  
  root to: 'application#index'

  namespace :api do
    namespace :v1 do

      resources :items, param: :id 
      resources :items, only: [:create, :update]

    end
  end
  
end
