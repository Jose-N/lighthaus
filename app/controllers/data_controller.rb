class DataController < ApplicationController
  before_action :check_logged_in
  skip_before_action :verify_authenticity_token

  def index
    @user = current_user
    @saves = User.find(@user.id).data
  end

  def show
    @save = Datum.find(params[:id])
  end

  def create
    @save = Datum.create(save_params)
    respond_to do |format|
      if @save.save
        UserDatum.create(user_id: current_user.id, datum_id: @save.id)
        format.json { render json: @save }
        format.html { redirect_to data_path, notice: "Save added successfully!"}
      end
    end
  end

  def update
    @save = Datum.find(params[:id])
    @save.update_attributes(edit_params)
    if @save.save
      redirect_to datum_path(@save), notice: "Save updated successfully!"
    end
  end

  def destroy
    @save = Datum.find(params[:id])
    @save.destroy

    redirect_to data_path
  end

  private
    def save_params
      params.require(:datum).permit(:title, :description, :id, :words => [], :word_count => [])
    end

    def edit_params
      params.require(:datum).permit(:title, :description, :id)
    end
end
