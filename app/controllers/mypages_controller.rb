class MypagesController < ApplicationController

  before_action :authenticate_user!
  before_action :set_group



  def index
    @groups_count = current_user.groups.length      #ログインしているユーザーが持っているグループ数

    @uncompleated_tasks_count = current_user.tasks.where.not(category_id: 3).length

    @current_group_tasks_count = current_user.tasks.where(group_id: "#{@group.id}").length
  end



  def set_group
    @group = Group.find(params[:group_id])
  end
end