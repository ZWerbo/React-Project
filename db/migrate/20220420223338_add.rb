class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :restaurant_name, :string
    add_column :reservations, :restaurant_name, :string
  end
end
