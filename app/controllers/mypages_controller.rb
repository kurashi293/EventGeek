class MypagesController < ApplicationController
  before_action :set_group


  def index
    @group_count = current_user.groups.count      ##ログインしているユーザーが持っているグループ数
    @user_count = @group.users.count
  end


  def set_group
    @group = Group.find(params[:group_id])
  end
end
