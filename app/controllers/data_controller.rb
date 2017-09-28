class DataController < ApplicationController
  before_action :check_logged_in

  def index
    @user = current_user
    @saves = User.find(@user.id).data
  end

  def show
    @save = Datum.find(params[:id])
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destory
  end
end
