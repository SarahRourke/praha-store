Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'items#index'

  namespace :api do
    namespace :v1 do

      resources :items, param: :id 
      resources :items, only: [:create, :update]

    end
  end
end
