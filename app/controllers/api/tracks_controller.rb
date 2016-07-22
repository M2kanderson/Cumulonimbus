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
end
