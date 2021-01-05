Rails.application.routes.draw do

  
  root 'praha_hompage#index'

  namespace :api do 
    namespace :v1 do

      # calls images to "/" to give active_record attachments entryway to app w/ in namespace ::api::v1
      
      get '/', to: 'items#index', via: :all
      # calls items#index to '/api/v1/items'
      resources :items, path: '/items'

      # calls items by :id to `/api/v1/items/${id}`
      resources :items, param: :id, path: '/items/:id'

      
     
    end

  end
 
  get '/', to: 'praha_homepage#index' 
 
  # get '/*path', to: 'items#index', via: :all
  # match 'items', to: 'items#index', via: [:get, :post]
  # match 'items'



  
  
end
