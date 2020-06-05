class GroupsController < ApplicationController

  before_action :set_group, only: [:show, :edit, :update, :destroy]



  def index
    @group = current_user.groups.all
    @group_category = GroupCategory.all
    @search = current_user.groups.ransack(params[:q])
    @result = @search.result.page(params[:page]).per(20)
  end


  def new
    @group = Group.new
    @group_category = GroupCategory.all
    @group.users << current_user
  end


  def create
    @group = Group.new(group_params)
    @group_category = GroupCategory.all
    if @group.save
      redirect_to group_path(@group)
    else
      render :new
    end
  end


  def show
  end


  def edit
    @group_category = GroupCategory.all
  end


  def update
    if @group.update(group_params)
      redirect_to group_path(@group)
    else
      redirect_to edit_group_path(@group)
    end
  end


  def destroy
    if @group.destroy
      redirect_to root_path
    else
      render :show
    end
  end


  def set_group
    @group = Group.find(params[:id])
  end



  private

  def group_params
    params.require(:group).permit(:name, :image, :notice, :group_category_id, user_ids: [])
  end
end