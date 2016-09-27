class Titleadd < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :title, :string
  end
end
