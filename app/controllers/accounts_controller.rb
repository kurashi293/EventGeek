class AccountsController < ApplicationController


  def index
  end


  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path
    else
      render :new
    end
  end


  def edit
    @user = User.find(params[:id])
  end


  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end


  def destroy
    if current_user.destroy
      redirect_to registration_path
    else
      render :index
    end
  end



  private

  def user_params
    params.require(:user).permit(:name, :icon_image, :email, :password, :confirmation_password)
  end
end
