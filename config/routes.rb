Rails.application.routes.draw do
  root 'praha_homepage#index'
  
  
  namespace :api do 
    namespace :v1 do

      # get '/items', to: 'items#index', via [:get, :post]

      resources :items, path: '/items'

      resources :items, param: :id, path: 'items/:id'
      
      # get '/items/:id', to: 'items#show', via: [:get, :put, :destroy]
      
      # get '/items', to: 'items#index', via: [:get, :post]
      
      




    end
    
    
    
  end
 
  get '/', to: 'items#index', via: :all
 
  # get '/*path', to: 'items#index', via: :all
  # match 'items', to: 'items#index', via: [:get, :post]
  # match 'items'



  
  
end
