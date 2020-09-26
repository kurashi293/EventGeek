class StatusesController < ApplicationController

  before_action :authenticate_user!
  before_action :set_group
  before_action :set_status, only: [:edit, :update]



  def index
    @status = Status.all
  end



  def new
    @status = Status.new

    @status.build_company
    @status.build_working_hour
    @status.build_position
  end



  def create
    @status = @group.statuses.new(status_params)
    # Status.create!(status_params)

    if @status.save
      redirect_to group_statuses_path(@group)
    else
      render :new
    end
  end



  def edit
  end



  def update
    if @status.update(status_params)
      redirect_to group_statuses_path(@group)
    else
      render :edit
    end
  end



  def set_group
    @group = Group.find(params[:group_id])
  end



  def set_status
    @status = Status.find(params[:id])
  end



  private

  def status_params
    params.require(:status).permit(:user_id, :transceiver_id, :meal_id, :wear_id, :rank_id, company_attributes: [:id, :name], working_hour_attributes: [:id, :start_at, :end_at, :break_at], position_attributes: [:id, :set_up, :opening, :start, :break, :end, :clean_up])
  end

end