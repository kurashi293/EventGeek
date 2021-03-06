class GroupsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_group, only: [:show, :edit, :update, :destroy, :information]
  before_action :set_all_groups, only: [:incremental_search, :category_search, :advanced_search]
  before_action :set_category, only: [:index, :incremental_search, :category_search, :advanced_search]
  before_action :set_ransack, only: [:index, :incremental_search, :category_search, :advanced_search]
  before_action :set_reference_url, only: [:new, :edit]



  def index
    @group = current_user.groups.all.page(params[:page]).per(30)

    return nil if params[:keyword] == ""
    @incremental_search = @group.where('name LIKE(?)', "%#{params[:keyword]}%").limit(20).page(params[:page]).per(30)
    respond_to do |format|
      format.html
      format.json
    end
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
    # ログインしているユーザーが所属している全グループのカテゴリーが、現在選択中のグループのカテゴリーと等しく
    # ログインしているユーザーが所属している全グループの内、現在選択中のグループと等しくないグループを取り出す
    @same_category_groups = current_user.groups.where(group_category_id: "#{@group.group_category_id}").where.not(id: "#{@group.id}")

    # 上記の処理は下記と同等
    # - if current_user && group.group_category_id == @group.group_category_id && group != @group
  end



  def edit
    $reference_group = Group.find(params[:id])
  end



  def update
    if @group.update(group_params)
      redirect_to root_path
    else
      render :edit
    end
  end



  def destroy
    if @group.destroy
      redirect_to root_path
    else
      render :index
    end
  end



  def incremental_search
    return nil if params[:keyword] == ""
    @incremental_search = @group.where('name LIKE(?)', "%#{params[:keyword]}%").limit(20).page(params[:page]).per(30)
    respond_to do |format|
      format.html
      format.json
    end
  end



  def category_search
    @category_search = current_user.groups.where(group_category_id: "#{params[:category_id]}").page(params[:page]).per(30)
  end



  def advanced_search
    @result = @advanced_search.result.page(params[:page]).per(30)
  end



  def information
  end



  def set_group
    @group = Group.find(params[:id])
  end



  def set_all_groups
    @group = current_user.groups.all
  end



  def set_category
    @group_category = GroupCategory.all
  end



  def set_ransack
    @advanced_search = current_user.groups.ransack(params[:q])
  end



  def set_reference_url
    $reference_url = request.fullpath
  end



  private

  def group_params
    params.require(:group).permit(:name, :image, :notice, :group_category_id, user_ids: [])
  end
end