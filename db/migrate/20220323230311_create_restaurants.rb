class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :hours, null: false
      t.string :cuisine, null: false
      t.string :city, null: false
      t.string :menu 
      t.timestamps
    end
  end
end
