class GroupsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_group, only: [:show, :edit, :update, :destroy]



  def index
    @group = current_user.groups.all
    @group_category = GroupCategory.all

    return nil if params[:keyword] == ""
    @incremental_search = @group.where('name LIKE(?)', "%#{params[:keyword]}%").limit(20).page(params[:page]).per(30)
    respond_to do |format|
      format.html
      format.json
    end

    @advanced_search = current_user.groups.ransack(params[:q])
    @result = @advanced_search.result.page(params[:page]).per(30)
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



  def incremental_search
    @group = current_user.groups.all
    @group_category = GroupCategory.all

    return nil if params[:keyword] == ""
    @incremental_search = @group.where('name LIKE(?)', "%#{params[:keyword]}%").limit(20).page(params[:page]).per(30)
    respond_to do |format|
      format.html
      format.json
    end

    @advanced_search = current_user.groups.ransack(params[:q])
  end



  def category_search
    @group = current_user.groups.all
    @group_category = GroupCategory.all

    @category_search = current_user.groups.where(group_category_id: "#{params[:category_id]}").page(params[:page]).per(30)

    @advanced_search = current_user.groups.ransack(params[:q])
  end



  def set_group
    @group = Group.find(params[:id])
  end



  private

  def group_params
    params.require(:group).permit(:name, :image, :notice, :group_category_id, user_ids: [])
  end
end