Rails.application.routes.draw do
  root 'items#index'
  

  namespace :api do 
    namespace :v1 do

      

      resources :items, param: :id 
      resources :items, only: [:create, :update]
    end
    
    
    
  end


  get '/*path', to: 'items#index', via: :all


  
  
end
