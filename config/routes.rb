Rails.application.routes.draw do

  
  root 'praha_homepage#index'
  
  namespace :api do 
    namespace :v1 do
      
      
     get '/items', to: 'items#index', via: :all
     resources :items, param: :id
    
      
     
    end

  end

  get '/*', to: 'praha_homepage#index'
end
