class TasksController < ApplicationController

  before_action :set_group


  def index
    @task = Task.all
    @task = Task.new
    5.times{@task.task_images.build}
    @category = Category.all
  end



  def create
    @task = @group.tasks.new(task_params)
    # binding.pry
    if @task.save
      redirect_to group_tasks_path(params[:group_id])
    else
      render :index
    end
  end



  def show
    @task = Task.find(params[:id])
  end



  def edit
    @task = Task.find(params[:id])
    @category = Category.all
    5.times{@task.task_images.build} if @task.task_images.blank?
    4.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.count == 1
    3.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.count == 2
    2.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.count == 3
    1.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.count == 4
  end



  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      redirect_to group_tasks_path
    else
      render :edit
    end
  end



  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      redirect_to group_tasks_path
    else
      render :index
    end
  end



  # def category_children
  #   @children = Category.find(params[:parent_id]).children
  # end



  # def category_grandchildren
  #   @grandchildren = Category.find("#{params[:child_id]}").children
  # end



  def set_group
    @group = Group.find(params[:group_id])
  end



  private

  def task_params
    params.require(:task).permit(:title, :content, :deadline, :category_id, :parent_id, :grand_parent_id, task_images_attributes: [:id, :image], user_ids: []).merge(user_id: current_user.id)
  end
end
