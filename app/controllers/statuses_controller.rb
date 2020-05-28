class StatusesController < ApplicationController

  before_action :set_group


  def index
    @status = Status.all
  end


  def new
    @status = Status.new
    @user = @group.users.all
    @transceiver = Transceiver.all
    @meal = Meal.all
    @wear = Wear.all
    @rank = Rank.all
    @status.build_company
    @status.build_working_hour
    @status.build_position
  end


  def create
    @status = @group.statuses.new(status_params)
    # Status.create!(status_params)
    @user = @group.users.all
    @transceiver = Transceiver.all
    @meal = Meal.all
    @wear = Wear.all
    @rank = Rank.all
    # binding.pry
    if @status.save
      redirect_to group_statuses_path(params[:group_id])
    else
      render :new
    end
  end


  def edit
    @status = Status.find(params[:id])
    @user = @group.users.all
    @transceiver = Transceiver.all
    @meal = Meal.all
    @wear = Wear.all
    @rank = Rank.all
  end


  def update
    @status = Status.find(params[:id])
    if @status.update(status_params)
      redirect_to group_statuses_path
    else
      render :edit
    end
  end


  def set_group
    @group = Group.find(params[:group_id])
  end



  private

  def status_params
    params.require(:status).permit(:user_id, :transceiver_id, :meal_id, :wear_id, :rank_id, company_attributes: [:id, :name], working_hour_attributes: [:id, :start_at, :end_at, :break_at], position_attributes: [:id, :set_up, :opening, :start, :break, :end, :clean_up])
  end


end