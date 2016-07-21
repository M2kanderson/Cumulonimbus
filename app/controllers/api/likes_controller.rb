class Api::LikesController < ApplicationController
  def create
    @like = Like.new(user_id: current_user.id,
    track_id: likes_params[:track_id]
    )

    if(@like.save)
      render :show, status: 200
    else
      @errors = @like.errors.full_messages
      render "api/shared/errors", status: 422
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id,
                         track_id: likes_params[:track_id]
    )

    if(@like.destroy)
      render :show, status: 200
    else
      @errors = @like.errors.full_messages
      render "api/shared/errors", status: 422
    end

  end

  private
  def likes_params
    params.require(:like).permit(:track_id)
  end
end
