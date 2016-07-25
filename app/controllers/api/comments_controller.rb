class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all()
    if(params[:track_id])
      @comments = @comments.where(track_id: params[:track_id])
    end
  end

  def show
    @comment = Comment.find_by_id(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    if(@comment.save)
      track = Track.find_by_id(params[:trackId])
      render :show
    else
      render json: @comment.errors, status: 422
    end
  end

  def update
    @comment = Comment.find_by_id(params[:id])
    if(@comment.update(comment_params))
      render :show
    else
      render json: ["Comment not found"], status: 404
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    track = @comment.track
    if(@comment)
      @comment.destroy
      render :show
    else
      render json: {base: ['Comment not found']}, status: 404
    end

  end

  def comment_params
    params.require(:comment).permit(:user_id, :track_id, :body)
  end
end
