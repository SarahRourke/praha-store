class Item < ApplicationRecord

    has_one_attached :image

    validates :image, {
        presence: true
    }

    default_scope -> { order(created_at: :desc)}

end
