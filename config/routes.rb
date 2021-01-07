Rails.application.routes.draw do

  
  root 'items#index'
  
  namespace :api do 
    namespace :v1 do
      
      # calls images to "/" to give active_record attachments entryway to app w/ in namespace ::api::v1
      match '/', to: 'items#index', via: :all
     resources :items, param: :id
      # calls items#index to '/api/v1/items'
      # resources :items, path: 'items'

      # calls items by :id to `/api/v1/items/${id}`
      

      
     
    end

  end

  get '*path', to: 'praha_homepage#index'
end
