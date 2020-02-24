class GroupsController < ApplicationController

  before_action :set_group, only: [:show, :edit, :update, :destroy]



  def index
    @group = Group.all
    @group = Group.new
  end


  def new
    @group = Group.new
    @group.users << current_user
  end


  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path
    else
      render :new
    end
  end


  def show
  end


  def edit
  end


  def update
    if @group.update(group_params)
      redirect_to root_path
    else
      redirect_to "/groups/#{@group/id}/edit"
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
    params.require(:group).permit(:name, :notice, user_ids: [])
  end
end