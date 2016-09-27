class PhotosController < ApplicationController
  before_action :authenticate_user!

  def index
    @photos = Photo.all
  end
  def new
    if params[:back]
      @photo = Photo.new(photos_params)
    else
      @photo = Photo.new
    end
  end

  PERMISSIBLE_ATTRIBUTES = %i(name photodate photodate_cache)

  def create
    @photo = Photo.new(photos_params)
    @photo.user_id = current_user.id
    if @photo.save
      redirect_to photos_path, notice: "写真を投稿しました！"
      NoticeMailer.sendmail_photo(@photo).deliver
    else
      render action: 'new'
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    redirect_to photos_path, notice: "ブログを削除しました！"
  end

  def edit
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.update(photos_params)
    if @photo.save
      redirect_to photos_path, notice: "投稿を修正しました！"
    else
      render action: 'new'
    end
  end

  private
    def photos_params
      params.require(:photo).permit(:title,:photodate)
    end
end
