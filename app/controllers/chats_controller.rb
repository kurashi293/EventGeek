class ChatsController < ApplicationController

  before_action :set_group



  def index
    @chat = Chat.all
    @chat = Chat.new
    @chats = @group.chats.includes(:user)
  end



  def create
    @chat = @group.chats.new(chat_params)
    if @chat.save
      redirect_to group_chats_path(@group)
      # #④
      # respond_to do |format|           #ajaxのオプションでdataTypeをjsonに指定しているので非同期通信でjson形式のデータが送られてくる
      #   format.html { redirect_to "group_chats_path(params[:group_id])" }
      #   format.json                    #受けた値はjbuilderを使用して、作成したメッセージをJSONで返す
      # end
    else
      @chats = @group.chats.includes(:user)
      render :index
    end
  end



  def destroy
    @chat = Chat.find(params[:id])
    if @chat.destroy
      redirect_to group_chats_path(@group)
    else
      render :index
    end
  end



  def set_group
    @group = Group.find(params[:group_id])
  end



  private


  def chat_params
    params.require(:chat).permit(:message, :image).merge(user_id: current_user.id)
  end
end
