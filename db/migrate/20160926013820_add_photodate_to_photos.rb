class AddPhotodateToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :photodate, :string
  end
end
