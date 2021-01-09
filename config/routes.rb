Rails.application.routes.draw do

  
  # root 'praha_homepage#index'
  
  namespace :api do 
    namespace :v1 do
    # root 'items$items_controller'
      
     resources :items, path: '/items/'
    #  resources :items, param: :id
    
      
     
    end

  end

  get '/*', to: 'praha_homepage#index'
end
