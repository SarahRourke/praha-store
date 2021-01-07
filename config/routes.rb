Rails.application.routes.draw do

  
  
  
  namespace :api do 
    namespace :v1 do
      root to: 'items#index'
      # calls images to "/" to give active_record attachments entryway to app w/ in namespace ::api::v1
      
     resources :items, param: :id
      # calls items#index to '/api/v1/items'
      # resources :items, path: 'items'

      # calls items by :id to `/api/v1/items/${id}`
      # get '/items', to: 'items#index', via: [:get, :post]

      
     
    end

  end

  get '/*', to: 'praha_homepage#index', via: :all
end
