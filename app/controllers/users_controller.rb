class UsersController < ApplicationController
  private

    def user_params
      params.require(:user).permit(:name, :icon_image, :email, :password, :password_confirmation)
    end
end
