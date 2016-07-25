class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    #join photos with tags
    #find photos with tag names that are in the provided list of tags
    if(params[:query])
      @tracks = Track.select("DISTINCT tracks.*").where("lower(tracks.title) LIKE (?) OR lower(tracks.artist) LIKE (?)", "%#{params[:query].downcase}%", "%#{params[:query].downcase}%")
    end
    render :index
  end

  def show
    @track = Track.find_by_id(params[:id])
  end

  def create
    @track = Track.new(track_params)
    if(@track.save)
      render :show
    else
      render json: @track.errors, status: 422
    end
  end

  def track_params
    params.require(:track).permit(:title, :image_url, :audio_url, :artist, :comments_count)
  end

end
