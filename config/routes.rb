Rails.application.routes.draw do
  devise_for :users
  get "task" => "tasks#index"
  get "member" => "members#index"
  get "chat" => "chats#index"
end
