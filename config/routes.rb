Rails.application.routes.draw do
  root 'items#index'
  

  namespace :api do 
    namespace :v1 do
      get '/items', to: 'items#index' 
      

      resources :items, param: :id 
      resources :items, only: [:index, :create, :update]
    end
    
    
    
  end


  get '/*path', to: 'items#index', via: :all


  
  
end
