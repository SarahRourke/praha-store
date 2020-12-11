module Api
    module V1
        class ItemsController < ApplicatoinController

            before_action :set_item, only: [:show, :destroy]

            # Get /items -> index of items/all items
            def index
                #renders all items for itemlist component and displays items in desc order from date created
                @items = Item.all
                render json: @items
            end

            # Get /items/:id
            def show
                # displays the single item found with item_id
                @item = Item.find(params[:id])
                
                render json: @item
            end

            # sets parameters for creating a new Item, ensures all item_params are included
            def new
                @item = Item.new(item_params)
                render json: @item
            end

            # Post /items
            def create
                @item = Item.new(item_params)
                #creates new item with item params
                @item = Item.create!(item_params)
                #sets image as a valid param of item object
                image = item_params[:image]
                #attaches the image or fie object as a blob
                image = @item.image.attach(params[:image])
                # sets active records automated url path for each item image
                @item.image_url = url_for(@item.image)

                if 
                    # when item is saved successfully, identifies image as the item_param "image"
                    @item.save(image: image)
                    render json: @item, status: :created
                else
                    render json: @item.errros, status: :unproccessable_entity
                end
            end

            #Put /items/:id
            def update
                #selects item by the assiged item_id
                @item = Item.find(params[:id])
                
                if @item.update(item_params)

                    render json: @item
                end
            end

            #Delete /items/:id
            def destroy
                #selects item by assigned item_id
                @item = Item.find(params[:id])
                @item.destroy
            end

            private
                def image
                    if @item.image.attached?
                        {
                            image_url: url_for(@item.image)
                        }
                    end
                end
                #use callbacks to share common setup or constraints between actions
                def set_item
                    @item = Item.find(params[:id])
                end

                #only allow a trusted parameter "white list" through
                def item_params
                    params.permit(:name, :image, :price, :category)
                end
            end
    end
end
