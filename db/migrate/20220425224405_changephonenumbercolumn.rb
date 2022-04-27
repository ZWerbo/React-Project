class Changephonenumbercolumn < ActiveRecord::Migration[5.2]
  def change
    change_column :reservations, :phone_number, :string
    add_column :restaurants, :neighborhood, :string
  end
end
