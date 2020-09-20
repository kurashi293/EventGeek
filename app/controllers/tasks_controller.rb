class TasksController < ApplicationController

  before_action :set_group
  before_action :set_task, only: [:show, :edit, :update, :destroy]
  before_action :set_task_images, only: [:edit]


  def index
    @task = Task.all
    @task = Task.new
    5.times{@task.task_images.build}
  end



  def create
    @task = @group.tasks.new(task_params)
    if @task.save
      redirect_to group_tasks_path
    else
      render :index
    end
  end



  def show
  end



  def edit
  end



  def update
    if @task.update(task_params)
      redirect_to group_tasks_path
    else
      set_task_images
      render :edit
    end
  end



  def destroy
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



  def set_task
    @task = Task.find(params[:id])
  end



  def set_task_images
    @image_length = @task.task_images.length
    (5 - @image_length).times{@task.task_images.build}
    # 5.times{@task.task_images.build} unless @task.task_images.present?
    # 4.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.length == 1
    # 3.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.length == 2
    # 2.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.length == 3
    # 1.times{@task.task_images.build} if @task.task_images.present? && @task.task_images.length == 4
  end




  private

  def task_params
    params.require(:task).permit(:title, :content, :deadline, :category_id, task_images_attributes: [:id, :image], user_ids: [])
  end
end