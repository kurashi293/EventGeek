class UsersController < ApplicationController
  before_action :set_user, only: [:confirmation, :compleate, :show, :new_icon, :new_email, :new_password, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:show]


  def index
    return nil if params[:keyword] == ""         #キーワードに一致しなければnilを返す
    @users = User.where('name LIKE(?)',"%#{params[:keyword]}%").where.not(id: current_user.id)        #キーワードを含むユーザーを検索して@usersに代入。ただしログインしている自分は除く
    respond_to do |format|
      format.html
      format.json
    end
  end


  def show
    @group_count = current_user.groups.count     #ログインしているユーザーが持っているグループ数
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
      render :sow
    end
  end


  def destroy
    if @user.destroy
      redirect_to registration_path
    else
      render user_path
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
