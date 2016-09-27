module PhotosHelper
  def send_img(photo)
    return image_tag(photo.photodate, alt: photo.user.name )
  end
end
