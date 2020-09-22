class UsersController < ApplicationController

  before_action :set_user, only: [:confirmation, :compleate, :show, :new_icon, :new_email, :new_password, :edit, :update, :destroy]


  def index
    return nil if params[:keyword] == ""   #キーワードに一致しなければnilを返す
    @users = User.where('name LIKE(?)',"%#{params[:keyword]}%").where.not(id: current_user.id)   #キーワードを含むユーザーを検索して@usersに代入。ただしログインしている自分は除く
    respond_to do |format|
      format.html
      format.json
    end
  end



  def show
    @groups_count = current_user.groups.length   #ログインしているユーザーが持っているグループ数

    @uncompleated_tasks_count = current_user.tasks.where.not(category_id: 3).length
  end



  def new_icon
  end



  def new_email
  end



  def new_password
  end



  def edit
  end



  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :show
    end
  end



  def destroy
    if current_user.destroy
      redirect_to registration_path
    else
      render :show
    end
  end



  def set_user
    @user = User.find(params[:id])
  end



  private

    def user_params
      params.require(:user).permit(:name, :avatar, :email, :password, :password_confirmation)
    end
end
