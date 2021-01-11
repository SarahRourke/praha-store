Rails.application.routes.draw do

  
  # root 'praha_homepage#index'
  
  namespace :api do 
    namespace :v1 do
    # root 'items$items_controller'
      

      # calls images to "/" to give active_record attachments entryway to app w/ in namespace ::api::v1
     get '/', to: 'items#index', via: :all
     resources :items
    #  , param: :id

      
     
    end

  end

  get '/*', to: 'praha_homepage#index'
end
