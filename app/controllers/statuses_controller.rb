class StatusesController < ApplicationController

  before_action :authenticate_user!
  before_action :set_group
  before_action :set_status, only: [:edit, :update]
  before_action :selected_users, only: [:new, :edit]
  before_action :new_user_array, only: [:edit]



  def index
    @status = Status.all
  end



  def new
    @status = Status.new

    @status.build_company
    @status.build_working_hour
    @status.build_position

    @url = request.fullpath
  end



  def create
    @status = @group.statuses.new(status_params)
    # Status.create!(status_params)

    if @status.save
      redirect_to group_statuses_path(@group)
    else
      selected_users
      render :new
    end
  end



  def edit
  end



  def update
    if @status.update(status_params)
      redirect_to group_statuses_path(@group)
    else
      selected_users
      new_user_array
      render :edit
    end
  end



  def set_group
    @group = Group.find(params[:group_id])
  end



  def set_status
    @status = Status.find(params[:id])
  end



  def selected_users
    @excluded_users = User.joins(:groups, :statuses).where(groups: {id: "#{@group.id}"}, statuses: {group_id: "#{@group.id}"})
    @select_users = @group.users - @excluded_users
  end



  def new_user_array
    @edit_user = User.where(id: "#{@status.user_id}")
    @select_users = @edit_user + @select_users
  end



  private

  def status_params
    params.require(:status).permit(:user_id, :transceiver_id, :meal_id, :wear_id, :rank_id, company_attributes: [:id, :name], working_hour_attributes: [:id, :start_at, :end_at, :break_at], position_attributes: [:id, :set_up, :opening, :start, :break, :end, :clean_up])
  end

end