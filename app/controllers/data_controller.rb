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
    data = JSON.parse(request.body.read)

    new_save = Datum.create(
      title: data["title"],
      description: data["description"],
      words: data["words"],
      word_count: data["word_count"]
    )

    if new_save.save
      UserDatum.create(
        user_id: current_user.id,
        datum_id: new_save.id
      )
      render json: new_save,
      notice: "Data was successfully saved"
    end
  end

  def edit
  end

  def update
    data = JSON.parse(request.body.read)
    save = Datum.find(data["id"])

    save.update( title: data["title"], description: data["description"])
    render json: save
  end

  def destroy
    @save = Datum.find(params[:id])
    @save.destroy

    redirect_to data_path
  end
end
