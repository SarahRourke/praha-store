class CreatePrahaInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :praha_infos do |t|
      t.string :name
      t.string :phone
      t.string :address
      t.string :email

      t.timestamps
    end
  end
end
